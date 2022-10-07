import React from "react";
import { useFormik } from "formik";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { addValidation } from "../../schema/Add";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const initialValues = {
  title: "",
  note: "",
  date: "",
  important: "",
};

const AddNote = ({ change }) => {
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: addValidation,
      onSubmit: async (values, action) => {
        try {
          const token = localStorage.getItem("token");
          console.log(token);
          values.date = new Date().toLocaleString();
          values.important = false;
          const { title, note, date, important } = values;

          const noteid = nanoid();

          const response = await axios.post(
            "https://boiling-mesa-88989.herokuapp.com/api/addnote",
            { noteid, title, note, date, important },
            { headers: { authtoken: token } }
          );
          console.log(response);
          action.resetForm();
          change();
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      },
    });

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "10px",
        margin: "25px",
      }}
      noValidate
      autoComplete="off"
    >
      <div className="addnote">
        <TextField
          label="Title"
          variant="outlined"
          size="small"
          type="text"
          autoComplete="off"
          name="title"
          id="title"
          placeholder="Enter your  title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.title && touched.title ? (
          <p className="form-error">{errors.title}</p>
        ) : null}
      </div>
      <div className="addnote">
        <TextField
          label="Note"
          variant="outlined"
          size="small"
          autoComplete="off"
          name="note"
          id="note"
          placeholder="enter your note"
          value={values.note}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.note && touched.note ? (
          <p className="form-error">{errors.note}</p>
        ) : null}
      </div>

      <Button variant="contained" onClick={handleSubmit}>
        Add note
      </Button>
    </Box>
    // <Container className="mt-3">
    //    <form onSubmit={handleSubmit}>
    //   <Row>

    //         <Col lg={4}>
    //           <input
    //             type="text"
    //             autoComplete="off"
    //             name="title"
    //             id="title"
    //             placeholder="Enter your  title"
    //             className="form-control mb-2"
    //             value={values.title}
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //           />
    //           {errors.title && touched.title ? (
    //             <p className="form-error">{errors.title}</p>
    //           ) : null}
    //         </Col >

    //         <Col lg={4}>
    //           <input
    //             type="text"
    //             autoComplete="off"
    //             name="note"
    //             id="note"
    //             className="form-control mb-2"
    //             placeholder="enter your note"
    //             value={values.note}
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //           />
    //           {errors.note && touched.note ? (
    //             <p className="form-error">{errors.note}</p>
    //           ) : null}
    //         </Col>

    //         <Col  className="gap-2">
    //           <Button variant="success" size="md" type="submit">
    //             Add Note
    //           </Button>
    //         </Col>

    //   </Row>
    //   </form>
    // </Container>
  );
};

export default AddNote;
