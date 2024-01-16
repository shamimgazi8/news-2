import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Name is required"),
  content: Yup.string().required("content is required"),
  // keywords: Yup.string().required("Name is required"),
});
