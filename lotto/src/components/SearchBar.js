import styled from 'styled-components';

function SearchBar({filter, updateFilter}){
    const handleText = (e) => {
        updateFilter(e.target.name, e.target.value);
    }

    const handleIsStockOnly = (e)=>{
        updateFilter(e.target.name, e.target.checked)
    }

    return (
        <SearchBarContainer>
            <InputText value={filter.text} type="text" name="text" placeholder="Search..." onChange={handleText}/>
            <div>
                <input type="checkbox" name="isStockOnly" id="check" checked={filter.isStockOnly} onChange={handleIsStockOnly}/>
                <LabelCheck htmlFor="check">Only show products in stock</LabelCheck>
            </div>
        </SearchBarContainer>
    )
}

export default SearchBar;

const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    width: 50%;
    height: 100px;
    border: 1px solid #e5e5e5;
`

const InputText = styled.input`
    margin-bottom: 5px;
    padding: 5px 15px;
    width: 30%;
    border: 1px solid #e5e5e5;
    outline: none;
    &:focus{
        border: 1px solid #1dc078;
    }
`

const LabelCheck = styled.label`
    margin-left: 5px;
    font-weight: 500;
`