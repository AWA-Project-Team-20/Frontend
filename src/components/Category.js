import React from 'react'
import styled from 'styled-components'
import Product from './Product';

const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 10px;
`;

const CategoryName = styled.h3`
    font-size: 30px;
`;

const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Category = ({ name, products, AddToCart }) => {
    return (
        <CategoryContainer>
            <CategoryName>{name}</CategoryName>
            <ProductWrapper>
                {products.map(p =>
                    <Product key={p.product_id} id={p.product_id} name={p.product_name} description={p.product_description}
                    price={p.product_price} src={p.product_image} AddToCart={AddToCart} />
                )}
            </ProductWrapper>
        </CategoryContainer>
    )
}

export default Category
