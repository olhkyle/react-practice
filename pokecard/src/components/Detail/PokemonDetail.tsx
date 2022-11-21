import styled from '@emotion/styled'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { PokemonDetailType } from '../../service/pokemonService'
import { RootState, useAppDispatch } from '../../store'
import { fetchPokemonDetail } from '../../store/pokemonDetailSlice'
import { PokeImageSkeleton } from '../common/PokeImageSkeleton'
import PokeMarkChip from '../common/PokeMarkChip'

function PokemonDetail() {
  const { name } = useParams()
  // const [pokemons, setPokemons] = useState<PokemonDetailType | null>(null)
  const imageType = useSelector((state: RootState) => state.imageType.type)
  const pokemonDetails = useSelector((state: RootState) => state.pokemonDetail.pokemonDetails)
  const pokemon = name ? pokemonDetails[name] : null
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!name) {
      return
    }
    // ;(async () => {
    //   const detail = await fetchPokemonDetail(name)
    //   setTimeout(() => {
    //     setPokemons(detail)
    //   }, 1000)
    // })()
    dispatch(fetchPokemonDetail(name))
  }, [name, dispatch])

  if (!name) {
    return null // name이 없을 때
  }

  if (!pokemon) {
    return (
      <Container>
        <ImageContainer>
          <PokeImageSkeleton />
        </ImageContainer>
        <Divider />
        <Footer>
          <PokeMarkChip />
        </Footer>
      </Container>
    )
  }

  return (
    <Container>
      <ImageContainer>
        <Image src={pokemon.images[imageType]} alt={pokemon.koreanName} />
      </ImageContainer>
      <Divider />
      <Body>
        <DetailTitle>기본 정보</DetailTitle>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>번호</TableHeader>
              <td>{pokemon.id}</td>
            </TableRow>
            <TableRow>
              <TableHeader>이름</TableHeader>
              <td>{`${pokemon.koreanName}(${pokemon.name})`}</td>
            </TableRow>
            <TableRow>
              <TableHeader>타입</TableHeader>
              <td>{pokemon.types.toString()}</td>
            </TableRow>
            <TableRow>
              <TableHeader>키</TableHeader>
              <td>{pokemon.height}m</td>
            </TableRow>
            <TableRow>
              <TableHeader>몸무게</TableHeader>
              <td>{pokemon.weight}kg</td>
            </TableRow>
          </tbody>
        </Table>
        <DetailTitle>능력치</DetailTitle>
        <Table>
          <tbody>
            {pokemon.baseStats.map((stat, idx) => (
              <TableRow key={`${stat.name}_${idx}`}>
                <TableHeader>{stat.name}</TableHeader>
                <td>{stat.value}</td>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Container>
  )
}

export default PokemonDetail

const Container = styled.section`
  margin: 1rem 2rem;
  border: 1px solid #e5e5e5;
  border-radius: 1rem;
  box-shadow: 1px 1px 5px 1px #c0c0c0;
`

const ImageContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
  min-height: 350px;
`

const Image = styled.img`
  width: 300px;
  height: 300px;
`

const Divider = styled.hr`
  margin: 32px;
  border-style: none;
  border-top: 1px dashed #d3d3d3;
  border-bottom: 1px dashed #d3d3d3;
`

const Body = styled.section`
  margin: 0 32px;
`

const Table = styled.table`
  margin: 0 auto 32px;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  th,
  td {
    padding: 6px 12px;
  }
`

const TableRow = styled.tr`
  border-width: 1px 0;
  border-style: solid;
  border-color: #f0f0f0;
`

const TableHeader = styled.th`
  width: 1px;
  white-space: nowrap;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #a0a0a0;
`

const DetailTitle = styled.h2`
  margin: 20px 0;
`

const Footer = styled.section`
  display: flex;
  margin: 32px 16px;
`
