import axios from "axios";
import { createSlice} from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addNewExpense = createAsyncThunk(
  "expenses/addExpense",
  async (initialExpense) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://boiling-mesa-88989.herokuapp.com/api/addexpense",
        initialExpense,
        { headers: { authtoken: token } }
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const initialState = [];

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote: {
      reducer(state, action) {
        state.push(action.payload);
      },

      prepare(noteid, title, note, date, important) {
        return {
          payload: {
            noteid,
            title,
            note,
            date,
            important,
          },
        };
      },
    },

    deleteNote: {
      reducer(state, action) {
        return state.filter((item) => {
          return item.noteid !== action.payload;
        });
      },
      prepare(noteid) {
        return {
          payload: noteid,
        };
      },
    },

    updateNote: {
      reducer(state, action) {
        const updatedOne = state.findIndex((item) => {
          return item.noteid === action.payload.noteid;
        });
        state.splice(updatedOne, 1, action.payload);
      },

      prepare(noteid, title, note, date, important) {
        return {
          payload: {
            noteid,
            title,
            note,
            date,
            important,
          },
        };
      },
    },

    viewNote: {
      reducer(state, action) {
        state = action.payload;
        return state;
      },

      prepare(notes) {
        return {
          payload: notes,
        };
      },
    },
  },
});

export const { createNote, viewNote, deleteNote, updateNote } =
  notesSlice.actions;
export default notesSlice.reducer;
export const allNotes = (state) => {
  return state.notes;
};
