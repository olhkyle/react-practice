import styled from '@emotion/styled'

function PokeNameChip({ name }: { name: string }) {
  return (
    <Chip>
      <Number>001</Number>
      <ChipText>{name}</ChipText>
    </Chip>
  )
}

export default PokeNameChip

const Chip = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
  border: 1px solid #c0c0c0;
  border-radius: 1rem;
  font-size: 0.85rem;
  font-weight: 700;
  box-shadow: 0.5px 0.5px 0 0 #e5e5e5;
`

const Number = styled.div`
  padding: 4px 6px;
  background-color: #ffc000;
  border-radius: 1rem;
  opacity: 0.8;
`

const ChipText = styled.label`
  margin: 0 8px 0 5px;
`
