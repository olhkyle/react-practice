import styled from '@emotion/styled'
import PokeCard from './PokeCard'

function PokeCardList() {
  return (
    <List>
      {Array.from({ length: 10 }).map((_, idx) => {
        return <PokeCard key={idx} />
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
