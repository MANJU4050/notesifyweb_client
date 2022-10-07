import React from "react";
import NoteCard from "./NoteCard";
import "./ViewNote.css";
import { useSelector } from "react-redux";
import { allNotes } from "./notesSlice";

import Box from "@mui/material/Box";

const ImportantNotes = () => {
  const notes = useSelector(allNotes);
  const imp = notes.filter((note) => {
    return note.important === true;
  });
  console.log(imp);
  const noteCard = imp.map((note) => {
    return (
      <NoteCard
        key={note.id}
        id={note.id}
        title={note.title}
        note={note.note}
        date={note.date}
        important={note.important}
      />
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

export default ImportantNotes;
