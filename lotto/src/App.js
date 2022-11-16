import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main'
import Lotto from './components/Lotto'
import OnlineStore from './components/OnlineStore';
import Login from './components/Login';
import SecondHand from './components/SecondHand';

function App() {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/lotto' element={<Lotto/>}/>
          <Route path='/onlinestore' element={<OnlineStore/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/secondhand' element={<SecondHand/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

