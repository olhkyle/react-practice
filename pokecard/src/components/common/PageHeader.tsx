import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

function PageHeader() {
  return (
    <Header>
      <Title>
        <Link to="/">Pokémon</Link>
      </Title>
      <Select>
        <option value="Official">Official</option>
        <option value="A">A</option>
        <option value="B">B</option>
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
