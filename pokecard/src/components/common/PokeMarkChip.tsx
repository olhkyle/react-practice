import styled from '@emotion/styled'

function PokeMarkChip() {
  return (
    <Chip>
      <Text>Poke</Text>
    </Chip>
  )
}

export default PokeMarkChip

const Chip = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 1rem;
  padding: 2px;
  border: 1px solid #c0c0c0;
  border-radius: 1rem;

  font-weight: 700;
  box-shadow: 0.5px 0.5px 0 0 #e5e5e5;
`

const Text = styled.label`
  padding: 0 8px;
  font-size: 0.85rem;
`
