import { createSlice } from "@reduxjs/toolkit";
const initialState = {
 selectedPostId:""
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setSelectedPosts: (state, action) => {
      state.selectedPostId= action.payload;
      
    },
  },
});

export const { setSelectedPosts} = postSlice.actions;

export default postSlice.reducer;