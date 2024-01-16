import CategoriesAddEdit from "@/modules/admin/news/categories/add_edit";
import TagsAddEdit from "@/modules/admin/news/topic/add_edit";
import React from "react";

const EditCategory = ({ params }: any) => {
  return (
    <div>
      <TagsAddEdit id={params?.edit_slug} />
    </div>
  );
};

export default EditCategory;
