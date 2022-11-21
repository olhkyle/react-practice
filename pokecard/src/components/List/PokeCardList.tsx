import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import { useSelector } from 'react-redux'
import { fetchPokemonsAPI, PokemonListResponseType } from '../../service/pokemonService'
import { RootState, useAppDispatch } from '../../store'
import { fetchPokemons } from '../../store/pokemonSlice'
import PokeCard from './PokeCard'

function PokeCardList() {
  const dispatch = useAppDispatch()
  const { pokemons } = useSelector((state: RootState) => state.pokemons)
  // const [pokemons, setPokemons] = useState<PokemonListResponseType>({
  //   count: 0,
  //   next: '',
  //   results: [],
  // })

  const [infiniteRef] = useInfiniteScroll({
    loading: false,
    hasNextPage: pokemons.next !== '',
    onLoadMore: async () => {
      // const moreLoadPokemons = await fetchPokemonsAPI(pokemons.next)
      // setPokemons({
      //   ...moreLoadPokemons,
      //   results: [...pokemons.results, ...moreLoadPokemons.results],
      // })
      dispatch(fetchPokemons(pokemons.next))
      console.log('more')
    },
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    disabled: false,
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: '0px 0px 400px 0px',
  })

  useEffect(() => {
    dispatch(fetchPokemons())
    // ;(async () => {
    //   const result = await fetchPokemonsAPI()
    //   setPokemons(result)
    //   // console.log(result)
    // })()
  }, [])

  console.log(pokemons)
  return (
    <>
      <List>
        {pokemons.results.map((pokemon, idx) => {
          return <PokeCard key={`${pokemon.name}_${idx}`} name={pokemon.name} />
        })}
      </List>
      <Loading ref={infiniteRef}>loading</Loading>
    </>
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

const Loading = styled.div`
  display: flex;
  justify-content: center;
`
