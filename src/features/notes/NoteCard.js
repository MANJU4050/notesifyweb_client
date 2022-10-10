import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./NoteCard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarRateIcon from "@mui/icons-material/StarRate";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import "./NoteCard.css";




const NoteCard = ({ edit, noteid, title, note, date, important }) => {

 

  const navigate = useNavigate();

  const update = () => {
    navigate(`/updatenote/${noteid}`);
  };

  const deleteNoteItem = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `https://boiling-mesa-88989.herokuapp.com/api/deletenote/${noteid}`,
        { headers: { authtoken: token } }
      );

      edit();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const addImportant = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.patch(
        `https://boiling-mesa-88989.herokuapp.com/api/importantnote`,
        { noteid, title, note, date, important },
        { headers: { authtoken: token } }
      );
      edit();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card sx={{ minWidth: 275, maxWidth: 275,boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
        <CardContent>
          <Typography sx={{fontWeight:"bold"}}>{title}</Typography>
          <Typography>{note}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={update} size="small">
            update
          </Button>

          <Tooltip title="Delete">
            <IconButton onClick={deleteNoteItem}>
              <DeleteIcon sx={{ color: "red", cursor: "pointer" }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="mark as important">
            <IconButton onClick={addImportant}>
              <StarRateIcon
                color={important ? "primary" : "disabled"}
                sx={{ cursor: "pointer", fontSize: "24px" }}
              />
            </IconButton>
          </Tooltip>

          <p className="date">{date}</p>
        </CardActions>
      </Card>
    </>
  );
};

export default NoteCard;
