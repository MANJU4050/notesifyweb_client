import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    firstname:"",
    lastname:"",
    email:"",
    mobile:""}

    const userSlice = createSlice({
        name: "user",
        initialState,
        reducers: {
          user: {
            reducer(state,action) {

                state= action.payload;
                return state;
              
            },
          },
        },
      });
      
      export const userState = (state) => state.user;
      export const { user } = userSlice.actions;
      export default userSlice.reducer;