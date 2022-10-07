import * as Yup from "yup";
export const loginValidation = Yup.object({
  email: Yup.string()
    .email("please enter a valid email")
    .required("email required"),

  password: Yup.string()
    .required("password required")
    .min(8, "Password should contain minimum 8 characters")
    .max(15, "password length should be less than 16 characters")
    .matches(
      /[a-zA-Z0-9]/,
      "Password can only contain alphanumeric characters"
    ),
});
