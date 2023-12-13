import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  toggle: false,
};

const reduxState = createSlice({
  name: "schoolProject",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.user = payload;
    },

    toggle: (state, { payload }) => {
      state.toggle = payload;
    },
  },
});

export const { loginUser, toggle } = reduxState.actions;

export default reduxState.reducer;
