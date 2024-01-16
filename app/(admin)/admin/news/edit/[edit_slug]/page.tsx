import NewsAddEdit from "@/modules/admin/news/add_edit";

import React from "react";

const EditCategory = ({ params }: any) => {
  return (
    <div>
      <NewsAddEdit id={params?.edit_slug} />
    </div>
  );
};

export default EditCategory;
