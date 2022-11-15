import Nav from './Nav'
import styled, { CSSProperties } from 'styled-components'
import { useRecoilState, useRecoilValue } from 'recoil'
import { colorState, fontSizeLabel, fontSizeState } from '../store/ColorContext'
import Logout from './Logout'

function Main() {
  const color = useRecoilValue<string | undefined>(colorState)
  const [fontSize, setFontSize] = useRecoilState<number | undefined>(fontSizeState)
  const fontSizeUnit = useRecoilValue<string | undefined>(fontSizeLabel)

  const handleClick = () => {
    if (fontSize) {
      setFontSize(fontSize + 1)
      console.log(fontSize)
    }
  }
  return (
    <>
      <Nav />
      <Block color={color} fontSize={fontSizeUnit}>
        <h1>Welcome</h1>
        <p>this is home page</p>
        <Button onClick={handleClick}>FontSize Up</Button>
      </Block>
      <Logout />
    </>
  )
}

export default Main

const Block = styled.div<CSSProperties>`
  padding: 1rem;
  width: 100%;
  height: 100%;
  ${({ color }) => color && `background-color : ${color}`};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}`}
`

const Button = styled.button`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  width: 150px;
  border: 1px solid #e5e5e5;
  border-radius: 1rem;

  &:hover {
    background-color: #e5e5e5;
  }
`
