import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Name is required"),
  publishedAt: Yup.string().required("publishedAt is required"),
  categoryIds: Yup.string().required("categoryIds is required"),
  description: Yup.string().required("Description is required"),
});
