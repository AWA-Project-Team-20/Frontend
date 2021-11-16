import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Restaurant from './Restaurant';
import Searchbar from './Searchbar';
import Filter from './Filter';
import restaurantService from '../services/restaurants'

const RestaurantsContainer = styled.div`
    display: flex;
    flex-flow: column;
    padding-top: 50px;
    align-items: center;
`;

const Header = styled.h1`
    text-align: center;
    width: 90%;
    border-bottom: 2px solid lightgray;
    padding-bottom: 15px;
`;

const FilterContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
`;

const RestaurantsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
`;

const Restaurants = () => {
    const [ restaurants, setRestaurants ] = useState([])
    const [ newSearch, setNewSearch ] = useState("")
    const [ newSort, setNewSort ] = useState("Sort by")

    useEffect(() => {
        restaurantService
        .getAll()
        .then(initialRestaurants => {
          setRestaurants(initialRestaurants)
        })
        .catch(error => console.log(error))
      }, []);
    
    let restaurantsToShow = restaurants
    
    if(newSearch !== "" || newSort !== "Sort by") {
        if(newSort === "High-Low") {
            let sortedRestaurants = [].concat(restaurants)
            restaurantsToShow = sortedRestaurants.sort((a, b) => (a.pricelvl < b.pricelvl) ? 1 : -1)
            if(newSearch !== "") {
                restaurantsToShow = restaurants.filter(r => r.name.toLowerCase().includes(newSearch.toLowerCase())
                                                    || r.type.toLowerCase().includes(newSearch.toLowerCase())
                                                    || r.location.toLowerCase().includes(newSearch.toLowerCase()))
            }
        }
        else if(newSort === "Low-High") {
            let sortedRestaurants = [].concat(restaurants)
            restaurantsToShow = sortedRestaurants.sort((a, b) => (a.pricelvl > b.pricelvl) ? 1 : -1)
            if(newSearch !== "") {
                restaurantsToShow = restaurants.filter(r => r.name.toLowerCase().includes(newSearch.toLowerCase())
                                                    || r.type.toLowerCase().includes(newSearch.toLowerCase())
                                                    || r.location.toLowerCase().includes(newSearch.toLowerCase()))
            }
        }
        else {
            restaurantsToShow = restaurants.filter(r => r.name.toLowerCase().includes(newSearch.toLowerCase())
                                                || r.type.toLowerCase().includes(newSearch.toLowerCase())
                                                || r.location.toLowerCase().includes(newSearch.toLowerCase()))
        }
    }  

    return (
        <RestaurantsContainer>
            <Header>Restaurants</Header>
            <FilterContainer>
                <Searchbar newSearch={newSearch} setNewSearch={setNewSearch} />
                <Filter setNewSort={setNewSort} />
            </FilterContainer>
            <RestaurantsWrapper>
                {restaurantsToShow.map(r =>
                    <Restaurant key={r.id} name={r.name} src={r.img} 
                    alt={r.alt} type={r.type} pricelvl={r.pricelvl} location={r.location} path={r.path} />
                )}
            </RestaurantsWrapper>
    </RestaurantsContainer>
    )
}

export default Restaurants
