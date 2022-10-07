import * as Yup from "yup";
export const addValidation = Yup.object({
  title: Yup.string()
    .min(3, "minimum 3 characters required")
    .max(15, "Must be 15 Characters or Less")
    .required("title required"),

  note: Yup.string()
    .required("note required")
    .min(3, "minimum 3 letters")
    .max(50, "maximum 50 letters"),
});
