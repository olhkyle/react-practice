import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import PageHeader from './components/common/PageHeader'
import PageNavigator from './pages/PageNavigator'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PageHeader />
        <PageNavigator />
      </BrowserRouter>
    </Provider>
  )
}

export default App
