import { createSlice } from '@reduxjs/toolkit';

export const saveData = createSlice({
  name: 'saveData',
  initialState: {
    responseData: '',
    requestData: '',
  },
  reducers: {
    changeData: (state, action) => {
      state.responseData = JSON.stringify(JSON.parse(action.payload).response);
      state.requestData = JSON.stringify(JSON.parse(action.payload).request);
    },
  },
});

export const { changeData } = saveData.actions;
export default saveData.reducer;
