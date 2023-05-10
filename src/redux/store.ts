import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import changeThemeLangReducer from './change-lang-slice/change-lang-slice';
import saveDataReducer from './save-data/save-data';
import { graphiqlApi } from './graphql-api/graphql-api';

const rootReducer = combineReducers({
  changeThemeLang: changeThemeLangReducer,
  savedData: saveDataReducer,
  [graphiqlApi.reducerPath]: graphiqlApi.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(graphiqlApi.middleware),
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
