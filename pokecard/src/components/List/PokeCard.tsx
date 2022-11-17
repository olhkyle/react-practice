import styled from '@emotion/styled'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { fetchPokemonDetail, PokemonDetailType } from '../../service/pokemonService'
import { PokeImageSkeleton } from '../common/PokeImageSkeleton'
import PokeMarkChip from '../common/PokeMarkChip'
import PokeNameChip from '../common/PokeNameChip'

interface PokeCardProps {
  name: string
}

function PokeCard({ name }: PokeCardProps) {
  const navigate = useNavigate()
  const [pokemons, setPokemons] = useState<PokemonDetailType | null>(null)

  const handleClick = () => {
    navigate(`/pokemon/${name}`)
  }

  useEffect(() => {
    ;(async () => {
      const detail = await fetchPokemonDetail(name)
      setTimeout(() => {
        setPokemons(detail)
      }, 1000)
    })()
  }, [name])

  if (!pokemons) {
    return (
      <Item color={'#ffca09'}>
        <Header>
          <PokeNameChip name={'???'} id={0} color={'#ffca09'} />
        </Header>
        <Body>
          <PokeImageSkeleton />
        </Body>
        <Footer>
          <PokeMarkChip />
        </Footer>
      </Item>
    )
  }

  // console.log(pokemons.color)
  return (
    <Item onClick={handleClick} color={pokemons.color}>
      <Header>
        <PokeNameChip name={pokemons.koreanName} id={pokemons.id} color={pokemons.color} />
      </Header>
      <Body>
        <Image src={pokemons.images.dreamWorldFront} alt={pokemons.name} />
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Item>
  )
}

export default PokeCard

const Item = styled.li<{ color: string }>`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 250px;
  height: 300px;
  border: 1px solid #c0c0c0;
  box-shadow: 1px 1px 4px 1px #c0c0c0;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: ${props => props.color};
    opacity: 0.8;
    transition: background-color 0s;
  }
`

const Header = styled.section`
  display: flex;
  margin: 0.5rem 0;
`

const Body = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
`

const Image = styled.img`
  width: 180px;
  height: 180px;
`

const Footer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`
