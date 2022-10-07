import React from "react";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useFormik } from "formik";
import { registerValidation } from "../schema/Register";
import "./Registration.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  mobile: "",
};

const Registration = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: registerValidation,
      onSubmit: async (values, action) => {
        try {
          const response = await axios.post(
            "https://boiling-mesa-88989.herokuapp.com/auth/registration",
            values
          );

          if (response.status === 200) {
            alert(response.data);
          } else if (response.status === 201) {
            alert(response.data);
            navigate("/login");
          } else {
            alert("error");
          }
        } catch (error) {
          console.log(error);
        }
        action.resetForm();
      },
    });

  return (
    <div className="formregistration">
      <div className="registrationinner">
        <h3 className="text-center mb-4">Notesify SIGN UP</h3>

        <form onSubmit={handleSubmit}>
          <Row>
            <Col>
            <div>
            <input
              type="text"
              autoComplete="off"
              name="firstname"
              id="firstname"
              className="form-control mb-2"
              placeholder="Enter Your Firstname"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstname && touched.firstname ? (
              <p className="form-error duo">{errors.firstname}</p>
            ) : null}
          </div>
          </Col>
          <Col>

          <div>
            <input
              type="text"
              autoComplete="off"
              name="lastname"
              id="lastname"
              className="form-control mb-2"
              placeholder="Enter Your Lastname"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastname && touched.lastname ? (
              <p className="form-error duo">{errors.lastname}</p>
            ) : null}
          </div>
            
            </Col>
          </Row>

          <Row>
            <Col>
            </Col>
          </Row>
          

          <div>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              className="form-control mb-2"
              placeholder="Enter Your Email"
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
              className="form-control mb-2"
              placeholder="Enter Your Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-error duo">{errors.password}</p>
            ) : null}
          </div>

          <div>
            <input
              type="password"
              autoComplete="off"
              name="confirm"
              id="confirm"
              className="form-control mb-2"
              placeholder="Confirm your password"
              value={values.confirm}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm && touched.confirm ? (
              <p className="form-error duo">{errors.confirm}</p>
            ) : null}
          </div>

          <div>
            <input
              type="text"
              autoComplete="off"
              name="mobile"
              id="mobile"
              className="form-control mb-2"
              placeholder="Enter Your mobile number"
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.mobile && touched.mobile ? (
              <p className="form-error duo">{errors.mobile}</p>
            ) : null}
          </div>

          <div className="d-grid gap-2 mb-4">
            <Button variant="success" size="md" type="submit">
              Sign up
            </Button>
          </div>
        </form>
        <div className="last mt-4">
          {" "}
          <span>Already have an account  ?  </span>
          <a style={{textDecoration:"none"}} href="./login" className="">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
