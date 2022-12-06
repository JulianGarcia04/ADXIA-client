import * as yup from "yup";

export default yup.object({
  name: yup
    .string()
    .min(5, "the name must has more than fives chracters")
    .required("This field is required"),
  lastname: yup
    .string()
    .min(5, "the lastname must has more than fives chracters")
    .required("This field is required"),
  nroDoc: yup
    .number()
    .required("This field is required")
    .positive()
    .max(9999999999, "The number must be less 15 characters"),
  tel: yup
    .number()
    .required("This field is required")
    .positive()
    .max(9999999999, "The number must be less 10 characters"),
  adress: yup
    .string()
    .min(5, "the adress must has more than fives chracters")
    .required("This field is required"),
});
