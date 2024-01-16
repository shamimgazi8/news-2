import CategoriesAddEdit from "@/modules/admin/news/categories/add_edit";
import React from "react";

const EditCategory = ({ params }: any) => {
  return (
    <div>
      <CategoriesAddEdit id={params?.edit_slug} />
    </div>
  );
};

export default EditCategory;
