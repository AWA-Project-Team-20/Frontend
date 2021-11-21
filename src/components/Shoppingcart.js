import React from 'react'
import styled from 'styled-components'

const CartContainer = styled.div`
display: flex;
justify-content: center;
text-align: center;
width: 50%;
height: 50%;
border: 1px solid black;


`;

const CartContent = styled.div`
font-family: 'Muli', sans-serif;
letter-spacing: 1px;
font-variant: small-caps;
font-style: italic;
font-size: 20px;
line-height: 200%;
`;





const Shoppingcart = () => {
return (
<>
<CartContainer>
<p>Your Order</p>


</CartContainer>






</>
)

}



export default Shoppingcart