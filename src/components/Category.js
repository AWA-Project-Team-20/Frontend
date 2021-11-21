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

const Category = ({ name, products }) => {
    return (
        <CategoryContainer>
            <CategoryName>{name}</CategoryName>
            <ProductWrapper>
                {products.map(p =>
                    <Product key={p.id} name={p.name} description={p.description}
                    price={p.price} img={p.img} alt={p.alt} />
                )}
            </ProductWrapper>
        </CategoryContainer>
    )
}

export default Category
