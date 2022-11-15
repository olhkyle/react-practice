import * as React from 'react'
import Nav from './Nav'
import Logout from './Logout'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import { colorState } from '../store/ColorContext'

function Profile() {
  const color = useRecoilValue<string | undefined>(colorState)
  console.log(color)
  return (
    <>
      <Nav />
      <Block color={color}>
        <h1>Profile</h1>
        <p>this is profile page</p>
      </Block>
      <Logout />
    </>
  )
}

export default Profile

const Block = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  ${({ color }) => color && `background-color : ${color}`};
`
