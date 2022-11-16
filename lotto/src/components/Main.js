import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Main () {
    return(
        <>
        <MainContainer>
            <MainTitle>Main Page</MainTitle>
            <NavLinkWrapper>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/lotto'>Lotto</NavLink>
                <NavLink to='/onlinestore'>OnlineStore</NavLink>
                <NavLink to='/secondhand'>Second-Hand</NavLink>
            </NavLinkWrapper>
        </MainContainer>
        </>
    )
}

export default Main;


// style
const MainContainer = styled.div`
    margin: 20px;
    padding: 5px;
`

const NavLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
`

const MainTitle = styled.h1`
    font-size: 3.2rem;
`

const NavLink = styled(Link)`
    margin-right: 10px;
    padding: 5px 15px;
    font-size: 1.5rem;
    font-weight: 600;
    color: #1dc078;
    border: 1px solid #e5e5e5;
    border-radius: 20px;
    text-decoration: none;
    &:hover {
        background-color: #1dc078;
        color: #fff;
    }
`