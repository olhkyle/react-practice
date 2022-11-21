import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'
import { fetchPokemonDetailAPI, PokemonDetailType } from '../service/pokemonService'

export const fetchPokemonDetail = createAsyncThunk(
  'pokemon/fetchPokemonsDetail',
  async (name: string) => {
    const response = await fetchPokemonDetailAPI(name)
    return response
  },
  {
    condition: (name, { getState }) => {
      const { pokemonDetail } = getState() as RootState
      const pokemon = pokemonDetail.pokemonDetails[name]
      return !pokemon
    },
  },
)

interface PokemonDetailState {
  //  pokemonDetals: {
  //     '이상해씨' : PokemonDetailType,
  //     '피카츄' : PokemonDetailType
  // }
  pokemonDetails: Record<string, PokemonDetailType>
}

const initialState = {
  pokemonDetails: {},
} as PokemonDetailState

const pokemonDetailSlice = createSlice({
  name: 'pokemonDetail',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchPokemonDetail.fulfilled,
      (state, action: PayloadAction<PokemonDetailType>) => {
        state.pokemonDetails = {
          ...state.pokemonDetails,
          [action.payload.name]: action.payload,
        }
      },
    )
  },
})

export const pokemonDetailReducer = pokemonDetailSlice.reducer
