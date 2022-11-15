import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { useRecoilState } from 'recoil'
import { colorState } from '../store/ColorContext'

function Nav() {
  const [color, setColor] = useRecoilState(colorState)
  const navigate = useNavigate()

  const onChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (color === '#FBFBFE') {
      setColor('#ffa000')
    } else {
      setColor('#FBFBFE')
    }
  }
  // console.log(color)
  return (
    <>
      <Block name="home">
        <NavEl onClick={() => navigate('/main')}>Home</NavEl>
        <NavEl onClick={onChange}>💡</NavEl>
        <NavEl onClick={() => navigate('/profile')}>Profile</NavEl>
      </Block>
    </>
  )
}

export default Nav

const Block = styled.div<{ name: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid #e5e5e5;
  ${props =>
    props.name === 'Login' &&
    css`
      margin-bottom: 180px;
    `}
`

const NavEl = styled.div`
  padding: 0.25rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #ffa000;
  }
`
