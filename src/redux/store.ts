import { configureStore, combineReducers } from '@reduxjs/toolkit';
import changeThemeLangReducer from './change-lang-slice/change-lang-slice';
import saveDataReducer from './save-data/save-data';
import { graphiqlApi } from './graphql-api/graphql-api';
import { loadState } from './localstorage-store';

const rootReducer = combineReducers({
  changeThemeLang: changeThemeLangReducer,
  savedData: saveDataReducer,
  [graphiqlApi.reducerPath]: graphiqlApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(graphiqlApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
