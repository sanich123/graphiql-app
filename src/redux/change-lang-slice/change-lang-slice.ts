import { LANGUAGES } from '@/utils/const';
import { createSlice } from '@reduxjs/toolkit';

export const changeLang = createSlice({
  name: 'changeLang',
  initialState: {
    language: LANGUAGES.ru,
  },
  reducers: {
    changeLanguage: (state) => {
      state.language = state.language === LANGUAGES.ru ? LANGUAGES.en : LANGUAGES.ru;
    },
  },
});

export const { changeLanguage } = changeLang.actions;
export default changeLang.reducer;
