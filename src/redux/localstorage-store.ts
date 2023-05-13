import { LANGUAGES, THEMES } from '@/utils/const';
import { CombinedState } from '@reduxjs/toolkit';
type StateType = {
  state: () => CombinedState<{
    changeThemeLang: {
      language: LANGUAGES;
      theme: THEMES;
    };
    savedData: { responseData: string };
  }>;
};
export function loadState() {
  try {
    const serializedState = localStorage.getItem('redux');
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

export function saveState({ state }: StateType): void {
  try {
    const serializedState = JSON.stringify(state);
    return localStorage.setItem('redux', serializedState);
  } catch (e) {
    /* empty */
  }
}
