import React, { useState } from 'react';
import './App.css';
// import CatParent from './components/CatParent';

function App() {
  // // const [inputValue, setInputValue] = useState({
  // //   id: '',
  // //   pw: '',
  // // });

  // const inputIdRef = useRef();
  // const inputPwRef = useRef();

  // // const [inputId, setInputId] = useState('');
  // // const [inputPw, setInputPw] = useState('');

  // // const handleChange = (e) => {
  // //   if(e.target.name === 'id'){
  // //     setInputId(e.target.value);
  // //   } else{
  // //     setInputPw(e.target.value);
  // //   }
  // // }

  // // const handleChange = (e) => {
  // //   setInputValue({...inputValue, [e.target.name] : inputRef.current.value})
  // // }

  // const handleSubmit = (e) => {
  //   console.log(inputIdRef.current.value)
  //   e.preventDefault();
  //   alert(`ID: ${inputIdRef.current.value}, PW: ${inputPwRef.current.value}`)
  // }

  const [number, setNumber] = useState(1);
  const age = 1;

  return (
    <>
    {/* <form onSubmit={handleSubmit}>
        <label>ID</label>
        <input ref={inputIdRef} type="text" name="id" className="input-id"/>
        <br/>
        <label>PW</label>
        <input ref={inputPwRef} type="text" name="pw" className="input-pw"/>
        <button>제출</button>
      </form> */}
      {/* <CatParent/> */}
      <div style={{margin: '0 auto'}}>
        <button onClick={() => {
          setNumber(number + 1);
        }}> click </button>
        <Child age={age}/>
      </div>
    </>
  );
}

export default App;


function Child(props) {
  console.log("It's child components");
  console.log(props.age);
  return <div>it's child</div>
}