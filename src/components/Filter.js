import React from 'react'
import styled from 'styled-components'

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
`;

const SearchBar = styled.div`
    display: flex;
    margin-left: 30px;
    align-items: center;
`;

const Text = styled.div`
    width: 600px;
    line-height: 2.5;
    font-size: 24px;
    font-weight: 700;
`;

const Input = styled.input`
    width: 100%;
    height: 42px;
    padding: 10px 10px;
    border-radius: 10px;
    transition: all 200ms ease-in-out;
    font-size: 18px;

    &::placeholder {
        color: lightgray;
    }

    &:focus {
        border-bottom: 5px solid rgb(0, 157, 224);
    }

`;

const Filter = ({ newFilter, setNewFilter }) => {
    return (
        <FilterContainer>
            <SearchBar>
                <Text>Search for restaurants by name:</Text>
                <Input value={newFilter} onChange={(e) => setNewFilter(e.target.value)} />
            </SearchBar>
        </FilterContainer>
    )
}

export default Filter
