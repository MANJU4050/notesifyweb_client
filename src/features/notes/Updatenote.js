import React from "react";
import { useFormik } from "formik";
import { updateValidation } from "../../schema/Update";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { allNotes } from "./notesSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./Update.css";

const Updatenote = () => {
  const { noteid } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const notes = useSelector(allNotes);

  const updatedNote = notes.find((item) => {
    return item.noteid === noteid;
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        note: updatedNote.note,
        title: updatedNote.title,
        date: updatedNote.date,
        important: updatedNote.important,
      },
      validationSchema: updateValidation,
      onSubmit: async (values, action) => {
        try {
          const { title, note, date, important } = values;
          const response = await axios.patch(
            "https://boiling-mesa-88989.herokuapp.com/api/updatenote",
            { noteid, title, note, date, important },
            { headers: { authtoken: token } }
          );
          console.log(response);
          action.resetForm();
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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
        Update note
      </Button>
    </Box>
  );
};

export default Updatenote;
