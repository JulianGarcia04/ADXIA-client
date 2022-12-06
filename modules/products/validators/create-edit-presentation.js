import * as yup from "yup";

export default yup.object({
  presentation: yup
    .number()
    .positive()
    .integer()
    .required("this field is required"),
  description: yup
    .string()
    .required("this field is required")
    .max(300, "this field only can has 255 chracters"),
  quantity: yup
    .number()
    .positive("this field must be a number positive")
    .required("this field is required"),
  price: yup
    .number()
    .positive("this field must be a number positive")
    .required("this field is required"),
});
