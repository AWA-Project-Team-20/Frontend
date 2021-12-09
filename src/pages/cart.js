import React from 'react';
import styled from 'styled-components'

const CartContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    min-height: 100vh;
`;

const Header = styled.h1`
    text-align: center;
    width: 90%;
    border-bottom: 2px solid lightgray;
    padding-bottom: 15px;
`;

const CartContent = styled.div`
    font-family: 'Muli', sans-serif;
    font-variant: small-caps;
    font-style: italic;
    font-size: 22px;
    color: black;
    line-height: 200%;
`;

const ProductImage = styled.img`
    display: block;
    width: 224px;
    height: 110px;
    transition: all 0.2s linear;
   `;

const IncreaseQty = styled.button`

`;

const DecreaseQty = styled.button`

`;

const TableHeader = styled.th`
    padding: 15px;
`;

const bottomRow = styled.div`
    justify-items: flex-start;
`;

const orderButton = styled.button`
    font-family: 'Muli', sans-serif;
    font-variant: small-caps;
    font-style: italic;
    font-size: 22px;
    color: black;
    border: 1px solid black;
`;

const ShoppingCart = ({AddToCart, RemoveFromCart, cartProducts, setCartProducts, isConsumer}) => {

 const totalPrice = cartProducts.reduce((a, c) => a + c.qty * c.price, 0);
  
    return (
    <CartContainer>
        {isConsumer ?
            <CartContent>
            <table>
                <tbody>
                <tr>
                    <th></th>
                    <TableHeader>Product</TableHeader>
                    <TableHeader>Quantity</TableHeader>
                    <TableHeader>Price ea</TableHeader>
                    <TableHeader></TableHeader>
                </tr>
            {cartProducts.map(p =>
            <><tr key={p.id}>
                    <td><ProductImage src={p.src} alt={p.name}></ProductImage></td>
                    <td> {p.name} </td>
                    <td><DecreaseQty onClick={()=>RemoveFromCart(p)}>-</DecreaseQty> {p.qty} <IncreaseQty onClick={()=>AddToCart(p)}> + </IncreaseQty> </td>
                    <td> {p.price} $</td>
                    {/* <td> {totalPrice.toFixed(2)} </td> */}
                </tr>
                </>
                )}
                <tr>
                <th></th>
                <th></th>
                <th>Total:</th>
                <th>{totalPrice.toFixed(2)}$</th>
                </tr>
                <tr>
                <th> <input type="text" name="Delivery address" placeholder="Delivery address"></input> </th>    
                <th></th>
                <th></th>
                <th> <button>Place your order</button> </th>
                </tr>
            </tbody>
            </table>
            </CartContent>
        : <Header>Please log in as a consumer!</Header>
        }
    </CartContainer>
    
    )
}

export default ShoppingCart