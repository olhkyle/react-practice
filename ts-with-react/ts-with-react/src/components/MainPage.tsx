import React, {useContext} from 'react';
import { ThemeDispatchContext } from '../store/SampleContext';
import Nav from './Nav';
import styled, {createGlobalStyle} from 'styled-components'


function MainPage() {
    const themeContext = useContext(ThemeDispatchContext);
    const { theme, toggleTheme } = themeContext;
    console.log(themeContext)
    return (
        <>
            <GlobalStyle/>
            <Wrapper color={theme.body}>
                <Container>
                    <Title theme={theme.body}>Kyle's Space</Title>
                    <Button onClick={toggleTheme}>B</Button>
                    <Nav/>
                </Container>
            </Wrapper>
        </>
        
        
    );
}

export default MainPage;

const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
    }
`

const Wrapper = styled.div`
    background-color: ${props => props.color};
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
`

const Container = styled.div`
    display: flex;
    align-items: center;
`
const Title = styled.h1`
    color: ${props => props.theme === '#fcfcfc' ? '#1c1c1c' : '#fff'};
`

const Button = styled.button`
    margin-left: 20px;
    width: 30px;
    height: 30px;
    background-color: #e5e5e5;
    border-radius: 50%;
    border: 1px solid black;
`