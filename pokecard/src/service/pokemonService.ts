import axios from 'axios'
interface Result {
  name: string
  url: string
}

export interface PokemonListResponseType {
  count: number
  next: string
  results: Result[]
}

const remote = axios.create()

// https://pokeapi.co/api/v2/pokemon
export const fetchPokemons = async () => {
  const defaultUrl = 'https://pokeapi.co/api/v2/pokemon'
  // post, get, put, delete
  const res = await remote.get<PokemonListResponseType>(defaultUrl) // promise로 반환하기 때문에
  return res.data
}
