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

// Axios.get을 통해 받아오는 Promise<> 제네릭에 들어갈 타입
interface PokemonDetailResponseType {
  id: number
  weight: number
  height: number
  name: string
  types: {
    type: {
      name: string
    }
  }[]
  sprites: {
    front_default: string
    other: {
      dream_world: {
        front_default: string
      }
      'official-artwork': {
        front_default: string
      }
    }
  }
  stats: {
    base_stat: number
    stat: {
      name: string
    }
  }[]
}

interface PokemonSpeciesResponseType {
  color: {
    name: string
  }
  names: {
    name: string
    language: {
      name: string
    }
  }[]
}

// 반환할 데이터 타입:  필요한 정보만 가공
export interface PokemonDetailType {
  id: number
  weight: number
  height: number
  name: string
  koreanName: string
  color: string
  types: string[]
  images: {
    frontDefault: string
    dreamWorldFront: string
    officialArtWorkFront: string
  }
  baseStats: {
    name: string
    value: number
  }[]
}

const remote = axios.create()

// PokeCardList.tsx에 보낼 데이터 -> 카드별 이름, Url
// https://pokeapi.co/api/v2/pokemon
export const fetchPokemons = async (nextUrl?: string) => {
  const requestUrl = nextUrl ? nextUrl : 'https://pokeapi.co/api/v2/pokemon'
  // post, get, put, delete
  const res = await remote.get<PokemonListResponseType>(requestUrl) // promise로 반환하기 때문에
  return res.data
}

// PokeCard.tsx에 뿌리기 -> 카드별 데이터 세부 사항(이미지, 번호, 이름, hp, 등등)
export const fetchPokemonDetail = async (name: string): Promise<PokemonDetailType> => {
  const pokemonDetailUrl = `https://pokeapi.co/api/v2/pokemon/${name}`
  const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${name}`

  const res = await remote.get<PokemonDetailResponseType>(pokemonDetailUrl)
  const speciesResponse = await remote.get<PokemonSpeciesResponseType>(pokemonSpeciesUrl)
  const detail = res.data
  const species = speciesResponse.data

  return {
    id: detail.id,
    name: detail.name,
    color: species.color.name,
    koreanName:
      species.names.find(item => {
        return item.language.name === 'ko'
      })?.name ?? detail.name,
    height: detail.height / 10, // 미터단위
    weight: detail.weight / 10, // kg 단위
    types: detail.types.map(item => item.type.name),
    images: {
      frontDefault: detail.sprites.front_default,
      dreamWorldFront: detail.sprites.other.dream_world.front_default,
      officialArtWorkFront: detail.sprites.other['official-artwork'].front_default,
    },
    baseStats: detail.stats.map(item => {
      return {
        name: item.stat.name,
        value: item.base_stat,
      }
    }),
  }
}
