// import {
//   useDeleteCategoryMutation,
//   useGetCategoryDropdownsQuery,
//   useMoveNewsMutation,
//   useRestoreCategoryMutation,
// } from "@/appstore/posts/category/category_api";
import { Checkbox, Modal, Popconfirm, Select, Tooltip, message } from "antd";
import { Form, Formik } from "formik";
import { useState } from "react";
import { TbReload } from "react-icons/tb";
import { FiEdit, FiExternalLink, FiEye, FiTrash2 } from "react-icons/fi";
import { MdOutlineDriveFileMove } from "react-icons/md";
import * as Yup from "yup";
import Link from "next/link";
import {
  useDeletePostMutation,
  useUpdatePostMutation,
} from "@/appstore/news/news_api";

import { useRestoreNewsMutation } from "@/appstore/news/news_api";
// const frontendUrl = import.meta.env.VITE_FRONTEND_URL;

const NewsAction = ({ record, isTrash }: any) => {
  const [moveModal, setMoveModal] = useState(false);
  const [keyword, setKeyword] = useState("");
  // const [moveData] = useMoveNewsMutation();

  const [restoreId] = useRestoreNewsMutation();
  // const { data: categoryDropdowns } = useGetCategoryDropdownsQuery({
  //   keyword: keyword,
  // });

  // const categoryArray = categoryDropdowns?.map((item: any) => {
  //   return {
  //     label: item?.title,
  //     value: item?.id,
  //   };
  // });

  // const moveHandler = async (values: any) => {
  //   const res: any = await moveData({
  //     categoryFrom: values.categoryFrom,
  //     categoryTo: values.categoryTo,
  //     isDestroy: values.isDestroy,
  //   });
  //   if (!res?.error) {
  //     message.success(`News move successfull`);
  //     setMoveModal(false);
  //   } else {
  //     if (res?.error?.status >= 500) {
  //       message.error("Somthing went wrong.");
  //     } else {
  //       message.error(
  //         `${
  //           res?.error?.data?.message
  //             ? res?.error?.data?.message
  //             : "Somthing went wrong"
  //         }`
  //       );
  //     }
  //   }
  // };

  const retoreHandler = async (id: any) => {
    try {
      const res: any = await restoreId({
        id: id,
      });
      if (!res?.error) {
        message.success("News restore successfully.");
      } else {
        if (res?.error?.status >= 500) {
          message.error("Somthing went wrong.");
        } else {
          message.error(
            `${
              res?.error?.data?.message
                ? res?.error?.data?.message
                : "Somthing went wrong"
            }`
          );
        }
      }
    } catch (err) {}
  };

  const [deleteItem] = useDeletePostMutation();

  const deleteConfirm = async (id: any) => {
    try {
      const res: any = await deleteItem({
        id: id,
        isTrash,
      });
      if (!res?.error) {
        message.success(
          !isTrash
            ? "Item moved to trash successfully!"
            : "Item permanently deleted successfully!"
        );
      } else {
        if (res?.error?.status >= 500) {
          message.error("Somthing went wrong.");
        } else {
          message.error(
            `${
              res?.error?.data?.message
                ? res?.error?.data?.message
                : "Somthing went wrong"
            }`
          );
        }
      }
    } catch (err) {}
  };

  return (
    <div className="">
      <div className="flex items-center justify-end gap-3">
        {!isTrash ? (
          <Tooltip placement="top" title={"Move news another News"}>
            <button type="button" className="hover:text-secondary">
              <MdOutlineDriveFileMove
                onClick={() => setMoveModal(true)}
                className="cursor-pointer"
                size={20}
              />
            </button>
          </Tooltip>
        ) : null}

        {!isTrash ? (
          <Tooltip placement="top" title={"Update"}>
            <Link href={`/admin/news/edit/${record?.id}`}>
              <FiEdit className="text-base" />
            </Link>
          </Tooltip>
        ) : null}

        {!isTrash ? (
          <Tooltip placement="top" title={"View Page"}>
            <a target="_blank" href={`home/${record.slug}`}>
              <FiExternalLink className="text-lg" />
            </a>
          </Tooltip>
        ) : null}
        {isTrash ? (
          <Tooltip placement="top" title={"Restore"}>
            <button type="button" onClick={() => retoreHandler(record?.id)}>
              <TbReload className="text-lg" />
            </button>
          </Tooltip>
        ) : null}

        {/* delete button */}
        <Tooltip
          placement="bottom"
          title={!isTrash ? "Move to Trash" : "Permanent Delete"}
        >
          <Popconfirm
            placement="topRight"
            title={
              !isTrash ? (
                <div className="font-semibold">
                  Are you sure you want to move this item to Trash? <br />
                  <div className="font-normal">
                    Item can be recovered from Trash.
                  </div>
                </div>
              ) : (
                <div className="font-semibold">
                  Are you sure you want to delete this item Permanently? <br />
                  <div className="font-normal">
                    Deleted item can't be recovered!
                  </div>
                </div>
              )
            }
            onConfirm={() => deleteConfirm(record?.id)}
            okText="Yes"
            cancelText="No"
          >
            <button type="button" className="hover:text-secondary">
              <FiTrash2 className="text-base" />
            </button>
          </Popconfirm>
        </Tooltip>
      </div>

      <Formik
        initialValues={{
          categoryFrom: record.id,
          categoryTo: "",
          isDestroy: false,
        }}
        enableReinitialize={true}
        validationSchema={Yup.object().shape({
          categoryTo: Yup.string().required("News to is required"),
        })}
        onSubmit={(values: any, { resetForm }) => {
          // moveHandler(values);
        }}
      >
        {({ handleSubmit, setFieldValue, errors, values, touched }: any) => (
          <Form>
            <Modal
              title="News move to another News"
              style={{ top: 100 }}
              open={moveModal}
              // onOk={() => <button className="bg-danger">On</button>}
              onCancel={() => setMoveModal(false)}
              footer={
                <div className="flex justify-end items-center gap-2">
                  <button
                    onClick={() => setMoveModal(false)}
                    className="border rounded px-4 py-[4px] "
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-[#0b3a5d] rounded px-4 py-[4px] text-white"
                  >
                    Move News
                  </button>
                </div>
              }
            >
              <div className="border-t pt-3 flex flex-col gap-2">
                <div>
                  <p>
                    <span className="font-bold">From :</span> {record?.title}
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <p className=" font-bold">To:</p>

                  <div className="w-full">
                    <Select
                      showSearch
                      placeholder="Select a News"
                      className="w-full"
                      optionFilterProp="children"
                      onChange={(val) => setFieldValue("categoryTo", val)}
                      onSearch={(searchVal) => setKeyword(searchVal)}
                      filterOption={(input: any, option: any) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      // options={categoryArray}
                    />
                    {errors?.categoryTo && touched?.categoryTo ? (
                      <div className="error">{errors?.categoryTo}</div>
                    ) : null}
                    <Checkbox
                      className="mt-1"
                      onChange={(e) =>
                        setFieldValue("isDestroy", e.target.checked)
                      }
                    >
                      <span>Move news and delete exsting News</span>
                    </Checkbox>
                  </div>
                </div>
              </div>
            </Modal>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewsAction;
