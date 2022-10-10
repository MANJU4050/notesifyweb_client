import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { loginValidation } from "../schema/Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {

  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginValidation,
      onSubmit: async (values, action) => {
        try {
          const response = await axios.post(
            "https://boiling-mesa-88989.herokuapp.com",
            values
          );

          if (response.status === 200) {
            localStorage.setItem("token", response.data);

            alert("Login successful");
            navigate("/");
          }
        } catch (error) {
          if (!error.response) {
            alert("network error");
          } else if (error.response.status === 401) {
            alert(error.response.data);
          } else if (error.response.status === 404) {
            alert(error.response.data);
          } else {
            alert("error");
          }
        }

        action.resetForm();
      },
    });

  return (
    <div className="form">
      <div className="logininner">
        <h3 className=" head text-center mb-5">SIGN IN</h3>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="form-control mb-4"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-error duo">{errors.email}</p>
            ) : null}
          </div>

          <div>
            <input
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              className="form-control mb-4"
              placeholder="Enter Your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-error duo">{errors.password}</p>
            ) : null}
          </div>

          <div className="d-grid gap-2 mb-4">
            <Button variant="success" size="md" type="submit">
              Sign In
            </Button>
          </div>
        </form>
        <div>
          <p>
            Do not have an Account?{" "}
            <a style={{ textDecoration: "none" }} href="/registration">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
