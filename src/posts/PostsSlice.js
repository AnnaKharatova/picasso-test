import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    selectedPost: null,
  },
  reducers: {
    setPostsList: (state, action) => {
      state.list = action.payload;
    },
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
  },
});

export const { setPostsList, setSelectedPost } = postsSlice.actions;

export default postsSlice.reducer;