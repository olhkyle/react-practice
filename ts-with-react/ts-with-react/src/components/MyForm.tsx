import React, { useState } from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { colorState } from '../store/ColorContext'

function MyForm() {
  const color = useRecoilValue<string | undefined>(colorState)

  const [inputContent, setInputContent] = useState({
    id: '',
    pw: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(inputContent)
    setInputContent({ ...inputContent, [e.target.id]: e.target.value })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const navigate = useNavigate()
  return (
    <>
      <Nav />
      <Block color={color}>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="id">ID</Label>
          <InputId
            type="text"
            value={inputContent.id}
            id="id"
            placeholder="아이디"
            onChange={handleChange}
          />
          <Label htmlFor="pw">PW</Label>
          <InputPassWord
            type="text"
            id="pw"
            placeholder="비밀번호"
            value={inputContent.pw}
            onChange={handleChange}
            maxLength={12}
          />
          <SubmitButton
            type="submit"
            value="로그인"
            onClick={() => {
              if (inputContent.id !== '1234' || inputContent.pw !== '1234') {
                alert('you are not permitted')
                return
              }
              navigate('/main')
            }}
          />
        </Form>
      </Block>
    </>
  )
}

export default MyForm

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${({ color }) => color && `background-color : ${color}`};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 300px;
  border-radius: 1rem;
  background-color: #fff;
`

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
`

const InputId = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 1rem;
  &:focus {
    border: 1px solid #ffa000;
  }
`

const InputPassWord = styled.input`
  margin-bottom: 1.2rem;
  padding: 0.5rem 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 1rem;
  &:focus {
    border: 1px solid #ffa000;
  }
`

const SubmitButton = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 1rem;

  &:hover {
    background-color: #ffa000;
    color: #fff;
  }
`
