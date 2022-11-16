import React from 'react';
import styled from 'styled-components';

export default function BusinessCard(props) {
    const {company, team, name, phoneNumber, email} = props.picked;
    
    return (
        <BusinessCardContainer>
            <div>Company : {company}</div>
            <div>team : {team}</div>
            <div>name: {name} </div>
            <div>phoneNumber : {phoneNumber}</div>
            <div>email: {email}</div>
        </BusinessCardContainer>
    )
}

const BusinessCardContainer = styled.div`
    margin-top: 20px;
    padding: 20px;
    width: 50%;
    border: 1px solid #1dc078;
`