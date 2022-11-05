import React, { useState } from 'react';

interface MyFormProps {
    onSubmit: (form : { name : string; description:string}) => void;
}

function MyForm(props:MyFormProps) {
    const [form, setForm] = useState({
        name: '',
        description: '',
    });

    const { onSubmit } = props;

    const {name, description} = form;
    // console.log(form);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form , [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: '',
            description: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={name} onChange={handleChange}/>
            <input type="text" name="description" value={description} onChange={handleChange}/>
            <button type="submit">등록</button>
        </form>
    )
}

export default MyForm;