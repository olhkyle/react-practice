import styled from '@emotion/styled'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { POKEMON_IMAGE_TYPE } from '../../constants'
import { RootState, useAppDispatch } from '../../store'
import { changeImageType, PokemonImageKeyType } from '../../store/imageTypeSlice'

function PageHeader() {
  const type = useSelector((state: RootState) => state.imageType.type)
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      changeImageType({
        type: e.target.value as PokemonImageKeyType, // string으로 넘어오기 때문에 우리가 정한 type 3가지 중 하나로 선택되도록
      }),
    )
  }

  return (
    <Header>
      <Title>
        <Link to="/">Pokémon</Link>
      </Title>
      <Select value={type} onChange={handleChange}>
        <option value={POKEMON_IMAGE_TYPE.OFFICIAL_ARTWORK}>Official</option>
        <option value={POKEMON_IMAGE_TYPE.DREAM_WORLD}>DreamWorld</option>
        <option value={POKEMON_IMAGE_TYPE.FRONT_DEFAULT}>FrontDefault</option>
      </Select>
    </Header>
  )
}

export default PageHeader

const Header = styled.nav`
  display: flex;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #c0c0c0;
`

const Title = styled.h1`
  font-size: 2rem;
  color: #ffca09;
  text-shadow: 1px 0 blue, 0 2px blue, 1px 0 blue, 0 1px blue;
`
const Select = styled.select`
  display: flex;
  margin-left: auto;
  padding: 8px 12px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
`
