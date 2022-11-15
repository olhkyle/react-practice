import { atom } from 'recoil'

export const colorState = atom<string | undefined>({
  key: 'colorState',
  default: '#FBFBFE',
})
