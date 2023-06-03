import { THEMES } from '@/constants/enums';

export type ObjectWithStrings = {
  [key: string]: string;
};

export type SVGThemeProps = {
  theme: THEMES;
};
