import { createSlice } from '@reduxjs/toolkit';

export const apiData = createSlice({
  name: 'apiData',
  initialState: {
    urlData: '',
    dataDoc: '',
  },
  reducers: {
    changeUrlData: (state, action) => {
      state.urlData = action.payload;
    },
    changeDataSchema: (state, action) => {
      state.dataDoc = action.payload;
    },
  },
});

export const { changeUrlData, changeDataSchema } = apiData.actions;
export default apiData.reducer;
