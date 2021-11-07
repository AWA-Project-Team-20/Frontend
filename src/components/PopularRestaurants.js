import React from 'react'
import styled from 'styled-components'
import Restaurant from './Restaurant'

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

const PopularRestaurants = () => {
    return (
        <RestaurantsContainer>
            <Header>Popular restaurants</Header>
                <RestaurantsWrapper>
                    <Restaurant 
                    src="https://imageproxy.wolt.com/venue/5e83518df638003969216699/6207fc18-b313-11eb-8480-1acefe1e773f_mcd_wolt_etusivu_1010x544.png"
                    alt="Restaurant pic"
                    name="McDonald's"
                    description="I'm lovin' it"
                    path="/"
                    />
                    <Restaurant 
                    src="https://imageproxy.wolt.com/venue/5ccc20076f16c13303ca12e9/68d3356e-80bc-11eb-8b35-2abc3ccdb078_uusi_feedikuva__1_.jpg"
                    alt="Restaurant pic"
                    name="Friends & Brgrs"
                    description="Burgers"
                    path="/"
                    />                    
                    <Restaurant 
                    src="https://imageproxy.wolt.com/venue/60cc638f5e0beb66e1fb1017/60eda2e6-d015-11eb-8f4f-fa2337d76966_6a17c76c_2ff6_11eb_a354_ba6ced6cc1dc_kotibox_valikoima_1920x1080_wolt_2020.png.jpeg"
                    alt="Restaurant pic"
                    name="Rax"
                    description="Pizza, Wings etc."
                    path="/"
                    />
                    <Restaurant 
                    src="https://imageproxy.wolt.com/venue/60b497d531bec3f50864c17c/e0a1d39a-c2aa-11eb-b6f0-8e7f70c7c49f_shutterstock_1060535249.jpg"
                    alt="Restaurant pic"
                    name="Pizzeria"
                    description="Classic pizzeria"
                    path="/"
                    />
                </RestaurantsWrapper>
        </RestaurantsContainer>
    )
}

export default PopularRestaurants
