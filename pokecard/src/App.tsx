import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PageHeader from './components/common/PageHeader'
import PageNavigator from './pages/PageNavigator'

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <PageNavigator />
    </BrowserRouter>
  )
}

export default App
