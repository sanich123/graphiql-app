import { LANGUAGES, THEMES } from '@/utils/const';
import { createSlice } from '@reduxjs/toolkit';

export const changeThemeLang = createSlice({
  name: 'changeThemeLang',
  initialState: {
    language: LANGUAGES.ru,
    theme: THEMES.dark,
  },
  reducers: {
    changeLanguage: (state) => {
      state.language = state.language === LANGUAGES.ru ? LANGUAGES.en : LANGUAGES.ru;
    },
    changeTheme: (state) => {
      state.theme = state.theme === THEMES.light ? THEMES.dark : THEMES.light;
    },
  },
});

export const { changeLanguage } = changeThemeLang.actions;
export default changeThemeLang.reducer;
