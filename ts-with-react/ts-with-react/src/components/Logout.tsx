import * as React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import { colorState } from '../store/ColorContext'
import { useNavigate } from 'react-router'

function Logout() {
  const color = useRecoilValue<string | undefined>(colorState)
  const navigate = useNavigate()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/')
  }
  return (
    <>
      <Button color={color} onClick={handleClick}>
        Log Out
      </Button>
    </>
  )
}

export default Logout

const Button = styled.button`
  display: inline-block;
  width: 100%;
  height: 50px;
  border: 1px solid lightgray;
  color: #ffa000;
  background-color: #fbfbfb;
`
