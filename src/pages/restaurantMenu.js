import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router'
import Searchbar from '../components/Searchbar';
import Filter from '../components/Filter';
import Category from '../components/Category';

const RestaurantMenuContainer = styled.div`
    display: flex;
    flex-flow: column;
    padding-top: 50px;
    align-items: center;
`;

const Error = styled.div`
    padding: 10px 60px;
    border: 2px inset black;
    border-radius: 10px;
    background-color: rgba(255, 0, 0, 0.3);
    box-shadow: 0 6px 20px rgba(255, 0, 0, 0.3);
    font-size: 20px;
    font-weight: 700;
`;

const FilterContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
`;

const Header = styled.h1`
    text-align: center;
    width: 90%;
    border-bottom: 2px solid lightgray;
    padding-bottom: 15px;
`;

const MenuWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
`;


const RestaurantMenuPage = ({ restaurants }) => {
    const [ newSearch, setNewSearch ] = useState("")
    const [ newSort, setNewSort ] = useState("Sort by")
    const sortingOptions = []

    const result = useParams()
    const restaurant = restaurants.find(r => r.id === Number(result.restaurantId))
    console.log(restaurant)

    const menu = restaurants[0].menu
    console.log(menu)

    menu.forEach(category => {
        sortingOptions.push(category.name)
    });

    if(restaurant === undefined) {
        return ( 
            <RestaurantMenuContainer>
                <Error>No matching restaurant found!</Error>
            </RestaurantMenuContainer>
        )
    }

    let productsToShow = menu

    if(newSort !== "Sort by") {
        productsToShow = menu.filter(c => c.name.includes(newSort))
    }
    
    if(newSearch !== "") {
        productsToShow = menu.filter(c => c.name.toLowerCase().includes(newSearch.toLowerCase()))
                                    // || c.products.name.toLowerCase().includes(newSearch.toLowerCase())
                                    // || c.products.description.toLowerCase().includes(newSearch.toLowerCase()))
    }

    return (
        <RestaurantMenuContainer>
            <Header>{restaurant.name} menu</Header>
            <FilterContainer>
                <Searchbar newSearch={newSearch} setNewSearch={setNewSearch} placeholder={"Search for products"} />
                <Filter setNewSort={setNewSort} sortingOptions={sortingOptions} />
            </FilterContainer> 
            <MenuWrapper>
                {productsToShow.map(c =>
                    <Category key={c.id} name={c.name} products={c.products} />
                )}
            </MenuWrapper>
        </RestaurantMenuContainer>
    )
}

export default RestaurantMenuPage
