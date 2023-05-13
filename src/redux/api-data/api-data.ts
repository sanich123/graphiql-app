import { createSlice } from '@reduxjs/toolkit';

export const apiData = createSlice({
  name: 'apiData',
  initialState: {
    urlData: '',
    dataQuery: '',
    dataMutation: '',
  },
  reducers: {
    changeUrlData: (state, action) => {
      state.urlData = action.payload;
    },
    changeDataQuery: (state, action) => {
      state.dataQuery = action.payload;
    },
    changeDataMutation: (state, action) => {
      state.dataMutation = action.payload;
    },
  },
});

export const { changeUrlData, changeDataQuery, changeDataMutation } = apiData.actions;
export default apiData.reducer;
