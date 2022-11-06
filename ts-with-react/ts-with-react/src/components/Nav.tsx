import * as React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

function Nav() {
    const navList = [
        {   
            id: 1,
            name: 'login'
        },
        {
            id: 2,
            name: 'counter',
        },
        {
            id: 3,
            name: 'reducer',
        }
    ]

    return (
        <>
            <Ul>
                {navList.map(nav => (

                        <Li key={nav.id}>
                            <StyledLink to={`/${nav.name}`}>
                                {nav.name}
                            </StyledLink>
                        </Li>
                ))}
            </Ul>
        </>
    );
}

export default Nav;

const Ul = styled.ul`
    display: flex;
    align-items: center;
`

const Li = styled.li`
    list-style-type: none;
    padding-left: 0;
    margin-right: 50px;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
`

const StyledLink = styled(Link)`
color: #1dc078;
text-decoration:none;
&:hover {
    color: #e5e5e5;
}
`