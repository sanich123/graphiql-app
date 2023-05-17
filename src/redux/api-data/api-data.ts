import { createSlice } from '@reduxjs/toolkit';

export const apiData = createSlice({
  name: 'apiData',
  initialState: {
    urlData: '',
    dataQuery: '',
    dataMutation: '',
    dataDoc: '',
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
    changeDataSchema: (state, action) => {
      state.dataDoc = action.payload;
    },
  },
});

export const { changeUrlData, changeDataQuery, changeDataMutation, changeDataSchema } = apiData.actions;
export default apiData.reducer;
