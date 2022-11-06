import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'

interface MyFormProps {
    onSubmit: (form : { name : string; description:string}) => void;
}

function MyForm(props:MyFormProps) {

    const navigate = useNavigate();
    const [formel, setForm] = useState({
        name: '',
        description: '',
    });

    const { onSubmit } = props;

    const { name, description } = formel;
    // console.log(form);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...formel , [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formel);
        setForm({
            name: '',
            description: ''
        })
    }

    return (
        <>
            <h1>Login Page</h1>
            <h3 onClick={() => navigate('/')}>logo</h3>
            {formel.name}
            <Form onSubmit={handleSubmit}>
                <Input type="text" name="name" value={name} placeholder="Put your Id" onChange={handleChange}/>
                <Input type="text" name="description" value={description} placeholder="Put your PW" onChange={handleChange}/>
                <Button type="submit">로그인</Button>
            </Form>
        </>
    )
}

export default MyForm;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width : 300px;
    
`

const Input = styled.input`
    margin-bottom: 20px;
    padding: 5px 20px;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
`

const Button = styled.button`
    padding: 5px 10px;
    width: 200px;
    border: 1px solid #e5e5e5;
    border-radius: 20px;
    outline: none;
    background-color: #e5e5e5;
`
