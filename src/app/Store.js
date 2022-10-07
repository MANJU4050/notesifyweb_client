import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../features/notes/notesSlice";
import favouritesReducer from "../features/navbar/NavbarSlice";
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    favourites: favouritesReducer,
    user:userReducer
  },
});
