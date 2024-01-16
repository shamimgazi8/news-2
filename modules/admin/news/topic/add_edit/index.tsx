"use client";

import { useTitle } from "@/hooks/useTitle";
import PageHeader from "@/modules/@common/page_header";
import TextArea from "antd/es/input/TextArea";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";
import ReactQuill from "react-quill";
import { initialValue } from "./initial_value";
import { validationSchema } from "./schema";

import {
  useCreateTagMutation,
  useGetSingleTagQuery,
  useUpdateTagMutation,
} from "@/appstore/news/tag/tag_api";
import { Collapse, Select, Spin, message } from "antd";
import MediaInput from "@/modules/admin/media/@components/media_input";

// const frontendUrl = import.meta.env.VITE_FRONTEND_URL;

const { Panel } = Collapse;

const TagsAddEdit = ({ id }: any) => {
  useTitle(`${id ? "Update" : "Create"} Category`);

  const [readOnly, setReadOnly] = useState(true);
  const [create, { isLoading }] = useCreateTagMutation();
  const [update, { isLoading: uploading }] = useUpdateTagMutation();

  const { data: SingleTags, isLoading: singleLoading } = useGetSingleTagQuery(
    { id },
    { skip: !id }
  );

  console.log("SingleTags", SingleTags);

  const createHandler = async (values: any) => {
    const metaKeyArray = values.metaKeyword
      ? values?.metaKeyword.join(",")
      : "";

    const keywordStr = values.searchKeyword
      ? values?.searchKeyword.join(",")
      : "";

    const data = {
      title: values?.title,
      content: values?.content,
      status: values?.status,
      featuredImage: values?.feature_img,
      searchKeyword: keywordStr,
      metaTitle: values?.metaTitle,
      metaKeyword: metaKeyArray,
      metaDescription: values?.metaDescription,
    };
    let res: any;
    if (id) {
      res = await update({ data, id });
    } else {
      console.log(data);
      res = await create(data);
    }
    if (!res?.error) {
      message.success(`Category ${id ? "Updated" : "Created"} Successfully!`);
    } else {
      if (res?.error?.status >= 500) {
        message.error("Somthing went wrong!");
      } else {
        message.error(
          `${
            res?.error?.data?.message
              ? res?.error?.data?.message
              : "Somthing went wrong!"
          }`
        );
      }
    }
  };

  return (
    <div className="">
      <PageHeader
        breadcrumbsData={[
          { title: "Dashboard", link: "/admin/dashboard" },
          { title: "All Topics", link: "/admin/tags" },
          { title: `${id ? "Update" : "Create"} Topics` },
        ]}
        title={`${id ? "Update" : "Create"} Topics`}
        btnTitle="All Topics"
        btnLink="/admin/tags"
        extraRightSide={
          id ? (
            <a
              target="_blank"
              href={`/${SingleTags?.slug}`}
              className="btn btn-white-outline"
            >
              <span>View Details</span>
              <FiArrowUpRight />
            </a>
          ) : null
        }
      />
      <Formik
        initialValues={SingleTags ?? initialValue}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={(values: any) => {
          createHandler(values);
        }}
      >
        {({ handleSubmit, setFieldValue, errors, values, touched }: any) => {
          return (
            <Form>
              {!singleLoading ? (
                <div className="grid grid-cols-[1fr_400px] gap-5 mb-8 mt-5">
                  <div>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-5">
                      <div className="col-span-1">
                        <div className="grid grid-cols-[180px_1fr] items-center gap-[44px]">
                          <label htmlFor="title" className="">
                            Name <span className="text-danger">*</span>
                          </label>
                          <div>
                            <Field
                              type="text"
                              name="title"
                              id="title"
                              placeholder="Enter Category Name"
                              className="border px-3 py-2 text-sm w-full"
                            />
                            {errors?.title && touched?.title ? (
                              <div className="error">{errors?.title}</div>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      {id !== undefined && (
                        <div className="col-span-1">
                          <div className="grid grid-cols-[180px_1fr] items-center gap-[44px]">
                            <label htmlFor="slug" className="">
                              Slug
                            </label>
                            <div className="flex items-center gap-1">
                              <Field
                                type="text"
                                name="slug"
                                readOnly={readOnly}
                                className={`px-3 py-2 text-sm outline-none ${
                                  readOnly ? "" : "border"
                                }`}
                              />
                              {readOnly ? (
                                <BiEdit
                                  onClick={() => setReadOnly(false)}
                                  className="cursor-pointer"
                                />
                              ) : (
                                <AiOutlineCloseCircle
                                  onClick={() => {
                                    setReadOnly(true);
                                    setFieldValue("slug", SingleTags?.slug);
                                  }}
                                  className="cursor-pointer"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="col-span-1">
                        <div className="grid grid-cols-[180px_1fr] items-start gap-[44px]">
                          <label htmlFor="summary">content</label>
                          <ReactQuill
                            theme="snow"
                            value={
                              values?.content && values?.content !== ""
                                ? values?.content
                                : ""
                            }
                            onChange={(val: any) =>
                              setFieldValue("content", val)
                            }
                          />
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="grid grid-cols-[180px_1fr] items-center gap-[44px]">
                          <label htmlFor="searchKeyword" className="">
                            Search Keyword
                          </label>
                          <div>
                            <Select
                              popupClassName="!hidden"
                              mode="tags"
                              style={{ width: "100%" }}
                              placeholder="Keywords"
                              onChange={(val) =>
                                setFieldValue("searchKeyword", val)
                              }
                              value={
                                values?.searchKeyword &&
                                values?.searchKeyword !== undefined
                                  ? values?.searchKeyword
                                  : []
                              }
                            />
                            {errors?.keywords && touched?.keywords ? (
                              <div className="error">{errors?.keywords}</div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-5 mt-5">
                      <div className="col-span-1">
                        <div className="grid grid-cols-[180px_1fr] items-center gap-[44px]">
                          <label htmlFor="metaTitle" className="">
                            Meta Title
                          </label>
                          <Field
                            type="text"
                            name="metaTitle"
                            id="metaTitle"
                            placeholder="Meta Title"
                            className="border px-3 py-2 text-sm"
                          />
                        </div>
                      </div>

                      <div className="col-span-1">
                        <div className="grid grid-cols-[180px_1fr] items-center gap-[44px]">
                          <label htmlFor="metaKeyword" className="">
                            Meta Keyword
                          </label>
                          <div>
                            <Select
                              popupClassName="!hidden"
                              mode="tags"
                              style={{ width: "100%" }}
                              placeholder=" meta Keywords"
                              onChange={(val) =>
                                setFieldValue("metaKeyword", val)
                              }
                              value={
                                values?.metaKeyword &&
                                values?.metaKeyword !== undefined
                                  ? values?.metaKeyword
                                  : []
                              }
                            />
                            {errors?.metaKeyword && touched?.metaKeyword ? (
                              <div className="error">{errors?.metaKeyword}</div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1">
                        <div className="grid grid-cols-[180px_1fr] items-start gap-[44px]">
                          <label className="" htmlFor="metaDescription">
                            Meta Description
                          </label>
                          <TextArea
                            value={values?.metaDescription}
                            onChange={(e) =>
                              setFieldValue("metaDescription", e.target.value)
                            }
                            placeholder="Meta Description"
                            autoSize={{ minRows: 3, maxRows: 5 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <Collapse
                        defaultActiveKey={["1"]}
                        onChange={(e) => console.log(e)}
                        expandIconPosition="end"
                        className="add_post"
                      >
                        <Panel header="Publish" key="1">
                          <div className="">
                            <label htmlFor="" className="font-medium mr-1">
                              Status
                            </label>

                            <Select
                              defaultValue="Active"
                              style={{ width: "100%" }}
                              onChange={(value) =>
                                setFieldValue("status", value)
                              }
                              options={[
                                { value: "ACTIVE", label: "Active" },
                                { value: "INACTIVE", label: "Inactive" },
                              ]}
                              value={
                                values.status && values?.status !== ""
                                  ? values?.status
                                  : "Active"
                              }
                            />
                          </div>

                          <button
                            className={`w-full btn btn-secondary mt-5 uppercase ${
                              isLoading || uploading ? "disabled" : ""
                            }`}
                            onClick={handleSubmit}
                            type="submit"
                          >
                            {isLoading || uploading ? (
                              <Spin size="small" />
                            ) : (
                              <>
                                {id === undefined ? "SAVE" : "UPDATE"} & PUBLISH
                              </>
                            )}
                          </button>
                        </Panel>
                      </Collapse>
                    </div>
                    <div className="mt-5">
                      <Collapse
                        defaultActiveKey={["1"]}
                        onChange={() => false}
                        expandIconPosition="end"
                        className="add_post"
                      >
                        <Panel header={<div>Featured Image</div>} key="1">
                          <div className="flex justify-center upload_image_width">
                            <MediaInput
                              onChange={(event: any) => {
                                setFieldValue("feature_img", event?.data?.path);
                              }}
                              src={values?.feature_img}
                              type="image"
                            />
                          </div>
                        </Panel>
                      </Collapse>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="min-h-[100vh] flex justify-center items-center">
                  <Spin className="large" />
                </div>
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default TagsAddEdit;
