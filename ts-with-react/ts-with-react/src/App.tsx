import React from 'react';
import Counter from './components/Counter';
import MyForm from './components/MyForm';
import NewCounter from './components/NewCounter';
import ReducerSample from './components/ReducerSample';
import SampleProvider from './components/SampleContext';

interface Form {
  name: string;
  description: string;
}

function App(){
  const onSubmit = (form: Form) =>  console.log(form);
  return (
    <div className="App">
      <Counter/>
      <MyForm onSubmit={onSubmit}/>
      <NewCounter/>
      <SampleProvider>
        <ReducerSample/>
      </SampleProvider>
    </div>
  );
}

export default App;
