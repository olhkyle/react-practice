import { atom, selector } from 'recoil'

export const colorState = atom<string | undefined>({
  key: 'colorState',
  default: '#FBFBFE',
})

export const fontSizeState = atom<number | undefined>({
  key: 'fontSizeState',
  default: 14,
})

export const fontSizeLabel = selector({
  key: 'updatedFontSize',
  get: ({ get }) => {
    const fontSize = get(fontSizeState)
    const unit = 'px'

    return `${fontSize}${unit}`
  },
})
