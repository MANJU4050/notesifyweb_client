import React, { useEffect } from "react";
import NoteCard from "./NoteCard";
import { useDispatch } from "react-redux";
import { viewNote } from "./notesSlice";
import axios from "axios";
import { useState } from "react";
import "./ViewNote.css";
import Box from "@mui/material/Box";

const ViewNote = ({ change }) => {

  

  const dispatch = useDispatch();
  const [notes, setNotes] = useState([]);
  const [display, setDisplay] = useState(true);
  const token = localStorage.getItem("token");

  const edit = () => {
    setDisplay(() => {
      return !display;
    });
  };

  const getNotes = async () => {
    try {
      const response = await axios.get("https://boiling-mesa-88989.herokuapp.com/api/viewnotes", {
        headers: { authtoken: token },
      });
      dispatch(viewNote(response.data));
      setNotes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotes();
    change(edit);
  }, [display]);

  const noteCard = notes.map((item) => {
    return (
      <>
      <NoteCard
        edit={edit}
        key={item.noteid}
        noteid={item.noteid}
        title={item.title}
        note={item.note}
        date={item.date}
        important={item.important}
      />
      
    </>
    );
  });
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        margin: "10px",
        flexWrap: "wrap",
      }}
    >
      {noteCard}
    </Box>
  );
};

export default ViewNote;
