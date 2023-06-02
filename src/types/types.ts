import { THEMES } from '@/constants/const';

export type ObjectWithStrings = {
  [key: string]: string;
};

export type SVGThemeProps = {
  theme: THEMES;
};
