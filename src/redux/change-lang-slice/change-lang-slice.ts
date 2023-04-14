import { createSlice } from '@reduxjs/toolkit';

export const changeLang = createSlice({
  name: 'changeLang',
  initialState: {
    language: 'ru',
  },
  reducers: {
    changeLanguage: (state) => {
      state.language = state.language === 'ru' ? 'en' : 'ru';
    },
  },
});

export const { changeLanguage } = changeLang.actions;
export default changeLang.reducer;
