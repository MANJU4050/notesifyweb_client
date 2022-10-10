import { createSlice } from "@reduxjs/toolkit";





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
        console.log(state);
        console.log(action.payload);
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
