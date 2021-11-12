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
    width: 480px;
    height: 270px;
    transition: all 0.2s linear;

    &:hover {
        transform: scale(1.1);
    }
`;

const RestaurantInfo = styled.div`
    text-align: center;
    color: black;
`;

const RestaurantName = styled.div`
    font-size: 18px;
    font-weight: 700;
`;

const RestaurantDesc = styled.div`
    color: darkgray;
    padding-top: 10px;
    font-size: 14px;
    margin: 0;
`;

const RestaurantPricelvl = styled.div`
    margin-top: 10px;
    border-top: 2px dashed lightgray;
    font-weight: 700;
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
                    <RestaurantPricelvl>{props.pricelvl}</RestaurantPricelvl>
                </RestaurantInfo>
            </RestaurantLink>
        </RestaurantItem>
    )
}

export default Restaurant
