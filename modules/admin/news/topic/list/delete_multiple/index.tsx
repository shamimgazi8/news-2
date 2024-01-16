"use client";
import { useCategoryBulkDeleteMutation } from "@/appstore/news/category/category_api";
import { message } from "antd";

interface PropTypes {
  ids: any;
  setIds: any;
}

const CategoryDeleteMultiple = ({ ids, setIds }: PropTypes) => {
  const [deleteMultiple] = useCategoryBulkDeleteMutation();

  const deleteMultipleHandler = async () => {
    try {
      const res: any = await deleteMultiple({
        ids: ids,
      });
      if (!res?.error) {
        message.success("Items move to trash successfully!");
        setIds([]);
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
    <button
      onClick={deleteMultipleHandler}
      type="button"
      className={"btn btn-secondary"}
    >
      {`${"Move to Trash "} (${ids?.length})`}
    </button>
  );
};

export default CategoryDeleteMultiple;
