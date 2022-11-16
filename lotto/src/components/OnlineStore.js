import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import products from './SportProducts'
import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';

function OnlineStore(){
    const sportProduct = products;

    const [filter, setFilter] = useState({
        text : '',
        isStockOnly: false,
    })

    const updateFilter = (key, value) => {
        setFilter({...filter, [key] : value})
    }
    console.log(filter);

    return (
        <MainContainer>
            <Link to="/"><Copyright>(C) olhkyle</Copyright></Link>
            <MainTitle>Online Store</MainTitle>
            <SearchBar filter={filter} updateFilter={updateFilter}/>
            <ProductsTable products={sportProduct} filter={filter}/>
        </MainContainer>
    )
}

export default OnlineStore;

const MainContainer = styled.div`
    margin: 20px;
`


const MainTitle = styled.h1`
    font-size: 3.2rem;
`

const Copyright = styled.h3`
    padding: 5px 10px;
    width: 70px;
    font-size: 0.8rem;
    border-radius: 15px;
    color: #fff;
    background-color: #000;
`
