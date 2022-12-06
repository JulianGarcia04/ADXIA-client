import * as yup from "yup";

export default yup.object({
  brand: yup.string().required("this field is required"),
  name: yup.string().required("this field is required"),
});
