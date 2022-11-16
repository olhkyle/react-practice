import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BusinessCard from './BusinessCard';
import datas from './Cards'

function Lotto() {
  const [cards, setCards] = useState([]);
  const [picked, setPicked] = useState([]);

  useEffect(() => {
    setCards(datas)
  }, [])


  const draw = () => {
    if (picked.length > 2){
      const names = picked.reduce((acc,cur) => {
        return acc = acc.concat(`${cur.name} `)
      }, '')
      alert(`이미 3명의 추첨을 완료했습니다. 당첨자는 ${names} 입니다.`)
    } 

    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];
    
    setCards(cards.filter(card => card.phoneNumber !== randomCard.phoneNumber));
    setPicked([...picked, randomCard]);
  }
  
  return (
    <div style={{margin: '20px'}}>
      <Link to="/"><Copyright>(C) olhkyle</Copyright></Link>
      <Title>Lotto Page</Title>
      {cards.length > 0 && <Draw onClick={draw}>추첨하기</Draw>}
      {picked.length > 0 && <BusinessCard picked={picked[picked.length - 1]}/>}
    </div>
  );
}

export default Lotto;


// style
const Title = styled.h1`
  font-size: 3.2rem;
`

const Draw = styled.button`
  padding: 5px 15px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  outline: 0;
  &:hover{
    color: #fff;
    background-color: #1dc078;
  }
`


const Copyright = styled.h3`
    padding: 5px 10px;
    width: 70px;
    font-size: 0.8rem;
    border-radius: 15px;
    color: #fff;
    background-color: #000;
`