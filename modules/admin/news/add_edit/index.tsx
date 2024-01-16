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
  useAddPostMutation,
  useGetSinglePostQuery,
  useUpdatePostMutation,
} from "@/appstore/news/news_api";
import { Collapse, DatePicker, Select, Space, Spin, message } from "antd";
import MediaInput from "@/modules/admin/media/@components/media_input";
import { useParams } from "next/navigation";
import { Value } from "sass";

// const frontendUrl = import.meta.env.VITE_FRONTEND_URL;

const { Panel } = Collapse;

const NewsAddEdit = ({ id }: any) => {
  // const params = useParams();
  // console.log("params", params);

  // const { id } = params;
  // console.log(id);

  useTitle(`${id ? "Update" : "Create"} News`);

  const [readOnly, setReadOnly] = useState(true);
  const [create, { isLoading }] = useAddPostMutation();
  const [update, { isLoading: uploading }] = useUpdatePostMutation();

  const { data: singleCategory, isLoading: singleLoading } =
    useGetSinglePostQuery({ id }, { skip: !id });

  const createHandler = async (values: any) => {
    const categoryIdsarr = [];
    categoryIdsarr.push(values?.categoryIds);

    const metaKeyArray = values.metaKeyword
      ? values?.metaKeyword.join(",")
      : "";
    const data = {
      title: values?.title,
      subTitle: values?.subTitle,
      description: values?.description,
      contentType: values?.contentType,
      featuredImage: values?.feature_img,
      categoryIds: categoryIdsarr,
      newsType: values?.newsType,
      status: values?.status,
      publishedAt: values?.publishedAt,
      metaTitle: values?.metaTitle,
      metaKeyword: metaKeyArray,
      metaDescription: values?.metaDescription,
      shortDescription: values?.shortDescription,
    };
    let res: any;
    if (id) {
      res = await update({ data, id });
    } else {
      console.log(data);
      res = await create(data);
    }
    if (!res?.error) {
      message.success(`News ${id ? "Updated" : "Created"} Successfully!`);
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
  const onChange = (value: any, dateString: any) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };
  const onOk = (value: any) => {
    console.log("onOk: ", value);
  };

  return (
    <div className="">
      <PageHeader
        breadcrumbsData={[
          { title: "Dashboard", link: "/admin/dashboard" },
          { title: "All News", link: "/admin/news" },
          { title: `${id ? "Update" : "Create"} News` },
        ]}
        title={`${id ? "Update" : "Create"} News`}
        btnTitle="All News"
        btnLink="/admin/news"
        extraRightSide={
          id ? (
            <a
              target="_blank"
              href={`/${singleCategory?.slug}`}
              className="btn btn-white-outline"
            >
              <span>View Details</span>
              <FiArrowUpRight />
            </a>
          ) : null
        }
      />
      <Formik
        initialValues={singleCategory ?? initialValue}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={(values: any) => {
          createHandler(values);
          console.log("values", values);
        }}
      >
        {({ handleSubmit, setFieldValue, errors, values, touched }: any) => {
          return (
            <Form>
              {!singleLoading ? (
                <div className="grid lg:grid-cols-[1fr_400px] gap-5 mb-8 mt-5">
                  <div>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-5">
                      <div className="col-span-1">
                        <div className="grid grid-cols-[180px_1fr] items-center gap-[44px]">
                          <label htmlFor="title" className="">
                            Title <span className="text-danger">*</span>
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

                      <div className="col-span-1">
                        <div className="grid grid-cols-[180px_1fr] items-center gap-[44px]">
                          <label htmlFor="subTitle" className="">
                            SubTitle
                          </label>
                          <div>
                            <Field
                              type="text"
                              name="subTitle"
                              id="subTitle"
                              placeholder="Enter subTitle"
                              className="border px-3 py-2 text-sm w-full"
                            />
                            {errors?.subTitle && touched?.subTitle ? (
                              <div className="error">{errors?.subTitle}</div>
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
                            <div className="flex items-center gap-1 border-gray-200 border-[1px]">
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
                                    setFieldValue("slug", singleCategory?.slug);
                                  }}
                                  className="cursor-pointer"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                      {/* <div className="col-span-1">
                        <div className="grid grid-cols-[180px_1fr] items-center gap-[44px]">
                          <label htmlFor="heading">
                            Heading<span className="text-danger"> *</span>
                          </label>
                          <div>
                            <Field
                              type="text"
                              name="heading"
                              id="heading"
                              placeholder="Heading"
                              className="border px-3 py-2 text-sm w-full"
                            />
                            {errors?.heading && touched?.heading ? (
                              <div className="error">{errors?.heading}</div>
                            ) : null}
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="col-span-1">
                        <div className="grid grid-cols-[180px_1fr] items-center gap-[44px]">
                          <label htmlFor="sub_title">Sub Heading</label>
                          <Field
                            type="text"
                            name="sub_title"
                            id="sub_title"
                            placeholder="Sub Heading"
                            className="border px-3 py-2 text-sm"
                          />
                        </div>
                      </div> */}
                      <div className="col-span-1">
                        <div className="grid grid-cols-[180px_1fr] items-center gap-[44px]">
                          <label htmlFor="contentType">
                            Content Type<span className="text-danger"> *</span>
                          </label>
                          <Select
                            defaultValue="TEXT"
                            style={{ width: "100%" }}
                            onChange={(value) =>
                              setFieldValue("contentType", value)
                            }
                            options={[
                              { value: "TEXT", label: "TEXT" },
                              { value: "PAGEBUILDER", label: "PAGEBUILDER" },
                            ]}
                            value={
                              values.contentType && values?.contentType !== ""
                                ? values?.contentType
                                : "TEXT"
                            }
                          />
                          {/* <div>
                            <Field
                              type="text"
                              name="contentType"
                              id="contentType"
                              placeholder="PAGEBUILDER or TEXT "
                              className="border px-3 py-2 text-sm w-full"
                            />
                            {errors?.contentType && touched?.contentType ? (
                              <div className="error">{errors?.contentType}</div>
                            ) : null}
                          </div> */}
                        </div>
                      </div>
                      <div className="col-span-1">
                        <div className="grid grid-cols-[180px_1fr] items-center gap-[44px]">
                          <label htmlFor="categoryIds">
                            Category Ids<span className="text-danger"> *</span>
                          </label>
                          <div>
                            <Field
                              type="Number"
                              name="categoryIds"
                              id="categoryIds"
                              placeholder="ID Number"
                              className="border px-3 py-2 text-sm w-full"
                            />
                            {errors?.categoryIds && touched?.categoryIds ? (
                              <div className="error">{errors?.categoryIds}</div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1">
                        <div className="grid grid-cols-[180px_1fr] items-center gap-[44px]">
                          <label htmlFor="heading">
                            News Type<span className="text-danger"> *</span>
                          </label>
                          <div>
                            <Select
                              defaultValue="TEXT_NEWS"
                              style={{ width: "100%" }}
                              onChange={(value) =>
                                setFieldValue("newsType", value)
                              }
                              options={[
                                { value: "TEXT_NEWS", label: "TEXT_NEWS" },
                                { value: "VIDEO_NEWS", label: "VIDEO_NEWS" },
                                { value: "LIVE_NEWS", label: "LIVE_NEWS" },
                                { value: "AUDIO_NEWS", label: "AUDIO_NEWS" },
                                {
                                  value: "INFOGRAPHICS",
                                  label: "INFOGRAPHICS",
                                },
                                {
                                  value: "PHOTOJOURNALISM",
                                  label: "PHOTOJOURNALISM",
                                },
                              ]}
                              value={
                                values.newsType && values?.newsType !== ""
                                  ? values?.newsType
                                  : "TEXT_NEWS"
                              }
                            />
                            {/* <Field
                              type="text"
                              name="newsType"
                              id="newsType"
                              placeholder="TEXT_NEWS, VIDEO_NEWS,LIVE_NEWS,AUDIO_NEWS,INFOGRAPHICS,PHOTOJOURNALISM"
                              className="border px-3 py-2 text-sm w-full"
                            /> */}
                            {errors?.newsType && touched?.newsType ? (
                              <div className="error">{errors?.newsType}</div>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      {id === undefined ? (
                        <div className="col-span-1">
                          <div className="grid grid-cols-[180px_1fr] items-center gap-[44px]">
                            <label htmlFor="publishedAt">
                              Published At
                              <span className="text-danger"> *</span>
                            </label>
                            <div>
                              <Space direction="vertical" size={100}>
                                <DatePicker
                                  showTime
                                  onChange={(value) =>
                                    setFieldValue("publishedAt", value)
                                  }
                                  value={
                                    values.publishedAt &&
                                    values?.publishedAt !== ""
                                      ? values?.publishedAt
                                      : ""
                                  }
                                />
                              </Space>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="col-span-1">
                          <div className="grid grid-cols-[180px_1fr] items-start gap-[44px]">
                            <label htmlFor="description">publishedAt</label>
                            <Field
                              value={
                                values?.publishedAt &&
                                values?.publishedAt !== ""
                                  ? values?.publishedAt
                                  : ""
                              }
                              className="border px-3 py-2 text-sm w-full cursor-not-allowed select-none"
                            />
                          </div>
                        </div>
                      )}

                      {/* <div className="col-span-1">
                        <div className="grid grid-cols-[180px_1fr] items-start gap-[44px]">
                          <label htmlFor="description">Description</label>
                          <ReactQuill
                            theme="snow"
                            value={
                              values?.description && values?.description !== ""
                                ? values?.description
                                : ""
                            }
                            onChange={(val: any) =>
                              setFieldValue("description", val)
                            }
                          />
                        </div>
                      </div> */}
                      <div className="col-span-1">
                        <div className="grid grid-cols-[180px_1fr] items-start gap-[44px]">
                          <label htmlFor="description" className="">
                            Description <span className="text-danger">*</span>
                          </label>
                          <div>
                            <ReactQuill
                              theme="snow"
                              value={
                                values?.description &&
                                values?.description !== ""
                                  ? values?.description
                                  : ""
                              }
                              onChange={(val: any) =>
                                setFieldValue("description", val)
                              }
                            />
                            {errors?.description && touched?.description ? (
                              <div className="error">{errors?.description}</div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1">
                        <div className="grid grid-cols-[180px_1fr] items-start gap-[44px]">
                          <label htmlFor="shortDescription">
                            Short description
                          </label>
                          <Field
                            type="text"
                            name="shortDescription"
                            id="shortDescription"
                            placeholder="short Description"
                            className="border px-3 py-2 text-sm"
                          />
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
                              defaultValue="PUBLIC"
                              style={{ width: "100%" }}
                              onChange={(value) =>
                                setFieldValue("status", value)
                              }
                              options={[
                                { value: "PUBLIC", label: "PUBLIC" },
                                { value: "DRAFT", label: "DRAFT" },
                                { value: "REJECTED", label: "REJECTED" },
                              ]}
                              value={
                                values.status && values?.status !== ""
                                  ? values?.status
                                  : "PUBLIC"
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

export default NewsAddEdit;
