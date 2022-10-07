import * as Yup from "yup";

export const registerValidation = Yup.object({
  firstname: Yup.string()
    .max(15, "Should be less than 16 characters")
    .min(4, "minimum 4 characters required")
    .required("First name required")
    .matches(/[a-zA-Z]/, "firstname should contain alphabets only"),

  lastname: Yup.string()
    .max(15, "Should be less than 16 characters")
    .min(1, "minimum 1 characters required")
    .required("Last name required")
    .matches(/[a-zA-Z]/, "firstname should contain alphabets only"),

  email: Yup.string()
    .email("please enter a valid email")
    .required("Please enter your email"),

  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password too short should be 8 minimum")
    .max(15, "passwrod too long should be 15 maximum")
    .matches(
      /[a-zA-Z0-9]/,
      "Password can only contain alphanumeric characters"
    ),

  confirm: Yup.string()
    .required("Please enter your password")
    .min(8, "Password too short should be 8 minimum")
    .max(15, "passwrod too long should be 15 maximum")
    .matches(/[a-zA-Z0-9]/, "Password can only contain alphanumeric characters")
    .oneOf([Yup.ref("password"), null], "Password must match"),

  mobile: Yup.string()
    .min(10, "please enter a valid mobile number")
    .max(10, "please enter a valid mobile number")
    .required("mobile number required"),
});
