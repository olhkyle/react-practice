import React from 'react';
import Product from './Product';

function ProductsTable(props) {
    const {products, filter} = props;

    const targetProduct = products.filter(p => p.name === filter.text);
    const filteredProducts = targetProduct.length > 0 ? targetProduct : products;

    const allProducts = filteredProducts.reduce((acc,curr) => {
        if(acc.hasOwnProperty(curr.category)){
            return {...acc, [curr.category] : [...acc[curr.category], curr]}
        } else{
            return {...acc, [curr.category] : [curr]}
        }
    }, {})

    const keys = Object.keys(allProducts);
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {keys.map(key => <Product key={key} category={key} items={allProducts[key]} stocked={filter.isStockOnly}/>)}
            </tbody>
        </table>
    )
}

export default ProductsTable;