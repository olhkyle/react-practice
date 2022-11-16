import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { fetchPokemons, PokemonListResponseType } from '../../service/pokemonService'
import PokeCard from './PokeCard'

function PokeCardList() {
  const [pokemons, setPokemons] = useState<PokemonListResponseType>({
    count: 0,
    next: '',
    results: [],
  })
  useEffect(() => {
    ;(async () => {
      const result = await fetchPokemons()
      setPokemons(result)
      console.log(result)
    })()
  }, [])

  console.log(pokemons)
  return (
    <List>
      {pokemons.results.map((pokemon, idx) => {
        return <PokeCard key={`${pokemon.name}_${idx}`} name={pokemon.name} />
      })}
    </List>
  )
}

export default PokeCardList

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 0 0 32px 0;
`
