import React, { useState } from "react";
import AddNote from "../features/notes/AddNote";
import ViewNote from "../features/notes/ViewNote";
import { useSelector } from "react-redux";
import { favourites } from "../features/navbar/NavbarSlice";
import ImportantNotes from "../features/notes/ImportantNotes";

const AddView = () => {
  const fav = useSelector(favourites);
  const [render, setRender] = useState(() => {});
  const change = (x) => {
    setRender(() => {
      return x;
    });
  };

  return (
    <>
      <AddNote change={render} />
      {fav ? <ImportantNotes /> : <ViewNote change={change} />}
    </>
  );
};

export default AddView;
