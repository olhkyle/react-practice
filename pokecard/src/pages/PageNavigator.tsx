import { Route, Routes } from 'react-router'
import PokemonDetail from '../components/Detail/PokemonDetail'
import PokeCardList from '../components/List/PokeCardList'

function PageNavigator() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PokeCardList />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </>
  )
}

export default PageNavigator
