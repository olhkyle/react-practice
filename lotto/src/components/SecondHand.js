import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import secondHands from "./SecondHands";
import SecondHandList from "./SecondHandList";
import styled from "styled-components";
function SecondHand(){

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(secondHands);
    }, [])

    
    return(
        <Container>
            <Link to="/"><Copyright>(C) olhkyle</Copyright></Link>
            <Title>Dangun</Title>
            <UlEl>
                {items.map((item, idx) => (
                    <SecondHandList key={idx} title={item.title} price={item.price} desc={item.desc} date={item.date}/>
                ))}
            </UlEl>
        </Container>
    )
}

export default SecondHand;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 100%;
    height: 100vh;
`

const Copyright = styled.h3`
    padding: 5px 10px;
    width: 70px;
    font-size: 0.8rem;
    border-radius: 15px;
    color: #fff;
    background-color: #000;
`

const Title = styled.h1`
    font-size: 3.2rem;
`

const UlEl = styled.ul`
    display: flex;
    padding-left: 0;
    width: 100%;
    flex-direction: row;
    list-style-type: none;
`