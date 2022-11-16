import styled from 'styled-components'

function SecondHandList(props) {
    const {title, price, desc, date} = props;
    return(
        <>
            <LiEl>
                <h1>{title}</h1>
                <Date>{date}</Date>
                <Price>{price}</Price>
                <p>{desc}</p>
            </LiEl>
        </>
    )
}

export default SecondHandList;

const LiEl = styled.li`
    padding-left: 0;
    width: 400px;
`

const Date = styled.span`
    display: block;
    margin-bottom: 5px;
`

const Price = styled.strong`
    font-size: 1.3rem;
`