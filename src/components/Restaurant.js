import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GoLocation } from 'react-icons/go'

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

const RestaurantContent = styled.div`
    text-align: center;
    color: black;
`;

const RestaurantName = styled.div`
    font-size: 18px;
    font-weight: 700;
`;

const RestaurantType = styled.div`
    color: darkgray;
    padding-top: 10px;
    font-size: 14px;
    margin: 0;
`;

const RestaurantInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    border-top: 2px dashed lightgray;
    font-weight: 700;
    padding: 5px;
    color: darkgray;
`;

const RestaurantLogo = styled(GoLocation)`
    margin-right: 5px;
`;

const RestaurantLocation = styled.div`
    width: 50%;
`;

const RestaurantPricelvl = styled.div`
    width: 50%;
`;

const Restaurant = (props) => {
    return (
        <RestaurantItem>
            <RestaurantLink to={props.path}>
                <RestaurantFigure>
                    <RestaurantImage src={props.src} alt={props.alt}></RestaurantImage>
                </RestaurantFigure>
                <RestaurantContent>
                    <RestaurantName>{props.name}</RestaurantName>
                    <RestaurantType>{props.type}</RestaurantType>
                    <RestaurantInfo>
                        <RestaurantLocation>
                            <RestaurantLogo /> {props.location}
                        </RestaurantLocation>
                        <RestaurantPricelvl>Price level: {props.pricelvl}</RestaurantPricelvl>
                    </RestaurantInfo>
                </RestaurantContent>
            </RestaurantLink>
        </RestaurantItem>
    )
}

export default Restaurant
