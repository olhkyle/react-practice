import React from 'react';
import MainPage from './components/MainPage';
import MyForm from './components/MyForm';
import NewCounter from './components/NewCounter';
import ReducerSample from './components/ReducerSample';
import SampleProvider from './store/SampleContext';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


interface Form {
  name: string;
  description: string;
}


function App():JSX.Element{
  const onSubmit = (form: Form) =>  console.log(form);

  return (
    <SampleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/login" element={<MyForm onSubmit={onSubmit}/>}/>
          <Route path="/counter" element={<NewCounter/>}/>
            <Route path="/reducer" element={<ReducerSample/>}/>
        </Routes>
      </BrowserRouter>
    </SampleProvider>
      
  );
}

export default App;
