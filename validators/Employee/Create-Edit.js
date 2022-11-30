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
  birthdate: yup
    .date()
    .required("This field is required")
    .min(
      new Date(1960, 0, 1),
      "The number must be greater than to the 1960 year"
    ),
  email: yup
    .string()
    .min(5, "the adress must has more than fives chracters")
    .required("This field is required"),
});
