import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Restaurant from './Restaurant';
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
    const [ newFilter, setNewFilter ] = useState("")

    useEffect(() => {
        restaurantService
        .getAll()
        .then(initialRestaurants => {
          setRestaurants(initialRestaurants)
        })
        .catch(error => console.log(error))
      }, [])


    if(newFilter !== '') {
        console.log(restaurants)
        // restaurants = restaurants.filter(r => r.name.toLowerCase().includes(newFilter.toLowerCase()))
    }

    return (
        <RestaurantsContainer>
            <Header>Restaurants</Header>
            <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
            <RestaurantsWrapper>
                {restaurants.map(r=> <Restaurant key={r.id} name={r.name}
                  src={r.img} alt={r.alt} description={r.description} path={r.path} />
                )}
            </RestaurantsWrapper>
    </RestaurantsContainer>
    )
}

export default Restaurants
