import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const RestaurantItem = styled.li`
    display: flex;
    margin-bottom: 50px;
    margin-left: 16px;
    margin-right: 16px;
`;

const RestaurantLink = styled(Link)`
    display: flex;
    flex-flow: column;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    border-radius: 10px;
    text-decoration: none;
`;

const RestaurantFigure = styled.figure`
    overflow: hidden;
`;

const RestaurantImage = styled.img`
    display: block;
    height: 300px;
    transition: all 0.2s linear;

    &:hover {
        transform: scale(1.1);
    }
`;

const RestaurantInfo = styled.div`
    text-align: center;
    color: black;
`;

const RestaurantName = styled.h5`
    font-size: 18px;
`;

const RestaurantDesc = styled.h5`
    color: darkgray;
    font-size: 14px;
`;

const Restaurant = (props) => {
    return (
        <RestaurantItem>
            <RestaurantLink to={props.path}>
                <RestaurantFigure>
                    <RestaurantImage src={props.src} alt={props.alt}></RestaurantImage>
                </RestaurantFigure>
                <RestaurantInfo>
                    <RestaurantName>{props.name}</RestaurantName>
                    <RestaurantDesc>{props.description}</RestaurantDesc>
                </RestaurantInfo>
            </RestaurantLink>
        </RestaurantItem>
    )
}

export default Restaurant
