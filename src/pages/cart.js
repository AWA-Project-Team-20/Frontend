import React from 'react';
import styled from 'styled-components'

const CartContainer = styled.div`
display: flex;
justify-content: center;
text-align: center;
width: 100%;
`;

const CartContent = styled.div`
font-family: 'Muli', sans-serif;
letter-spacing: 1px;
font-variant: small-caps;
font-style: italic;
font-size: 20px;
color: black;
line-height: 200%;

`;



const ShoppingCart = () => {
    return (
    <CartContainer>
        <CartContent>
        <p>Your order at the moment:</p>

        </CartContent>

    </CartContainer>
    )
}

export default ShoppingCart