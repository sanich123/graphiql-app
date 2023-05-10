import { createSlice } from '@reduxjs/toolkit';

export const apiData = createSlice({
  name: 'apiData',
  initialState: {
    urlData: '',
  },
  reducers: {
    changeUrlData: (state, action) => {
      state.urlData = action.payload;
    },
  },
});

export const { changeUrlData } = apiData.actions;
export default apiData.reducer;
