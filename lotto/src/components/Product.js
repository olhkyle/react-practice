
function Product(props){
    const { category, items, stocked } = props
    
    const inStockItems = stocked ? items.filter(item => item.stocked === true) : items;
    
    return (
        <>
            <tr>
                <th>{category}</th>
            </tr>
            {inStockItems.map(item => {
                return (
                    <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                )
            })}
        </>
    )
}

export default Product;