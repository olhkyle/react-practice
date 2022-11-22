// store
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { imageTypeReducer } from './imageTypeSlice'
import { pokemonDetailReducer } from './pokemonDetailSlice'
import { pokemonsReducer } from './pokemonSlice'

export const store = configureStore({
  reducer: {
    imageType: imageTypeReducer,
    pokemons: pokemonsReducer,
    pokemonDetail: pokemonDetailReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
