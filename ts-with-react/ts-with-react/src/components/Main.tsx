import React from 'react'
import Nav from './Nav'
import styled, { CSSProperties } from 'styled-components'
import { useRecoilValue } from 'recoil'
import { colorState } from '../store/ColorContext'
import Logout from './Logout'

function Main() {
  const color = useRecoilValue<string | undefined>(colorState)
  console.log(color)
  return (
    <>
      <Nav />
      <Block color={color}>
        <h1>Welcome</h1>
        <p>this is home page</p>
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
`
