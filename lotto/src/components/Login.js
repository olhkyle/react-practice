import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Login(){

    const [inputValue, setInputValue] = useState({
        'id': '',
        'pw': '',
    })

    const [logined, setLogined] = useState([]);

    const handleChange = (e) => {
        setInputValue({...inputValue, [e.target.name] : e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLogined([...logined, inputValue]);
    }


    console.log(inputValue);
    console.log(logined);
    
    return(
        <FormEl>
            <Link to="/"><Copyright>(C) olhkyle</Copyright></Link>
            <MainTitle>Login</MainTitle>
            <DivEl>
                <LabelEl htmlfor="id">I.D</LabelEl>
                <InputEl value={inputValue.id} type="text" name="id" id="id" placeholder="Enter your ID" onChange={handleChange}/>
            </DivEl>
            <DivEl>
                <LabelEl htmlfor="pw">P.W</LabelEl>
                <InputEl value={inputValue.pw} type="text" name="pw" id="pw" placeholder="Enter your Password" onChange={handleChange}/>
            </DivEl>
            <ButtonEl onSubmit={handleSubmit}>Login</ButtonEl>
        </FormEl>
    )
}

export default Login;

const FormEl = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 300px;
`

const Copyright = styled.h3`
    padding: 5px 10px;
    width: 70px;
    font-size: 0.8rem;
    border-radius: 15px;
    color: #fff;
    background-color: #000;
`

const MainTitle = styled.h1`
    font-size: 3.2rem;
`

const DivEl = styled.div`
    height: 40px;
`

const InputEl = styled.input`
    padding: 5px 10px;
    border: 1px solid #e5e5e5;
`

const LabelEl = styled.label`
    display: inline-block;
    width: 50px;
    font-size: 1.1rem;
    font-weight: 600;
`

const ButtonEl = styled.button`
    padding: 8px 20px;
    border: none;
    border-radius: 20px;
    font-size: 1.05rem;
    &:hover{
        color: #fff;
        background-color: #000;
    }
`
