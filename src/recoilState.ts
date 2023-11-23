
import { atom } from 'recoil';

export const darkModeState = atom<boolean>({
  key: 'darkModeState',
  default: false,
});

export const searchQueryState = atom<string>({
  key: 'searchQueryState',
  default: '',
});
