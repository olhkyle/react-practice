import React from 'react'
import styled from 'styled-components'
import { RecoilRoot } from 'recoil'
import MyForm from './components/MyForm'
import Main from './components/Main'
import GlobalStyle from './lib/GlobalStyle'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './components/Profile'

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Block>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MyForm />} />
            <Route path="/main" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </Block>
    </RecoilRoot>
  )
}

export default App

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`
