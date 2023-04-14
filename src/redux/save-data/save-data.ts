import { createSlice } from '@reduxjs/toolkit';

export const saveData = createSlice({
  name: 'saveData',
  initialState: {
    responseData: '',
  },
  reducers: {
    changeData: (state, action) => {
      state.responseData = action.payload;
    },
  },
});

export const { changeData } = saveData.actions;
export default saveData.reducer;
