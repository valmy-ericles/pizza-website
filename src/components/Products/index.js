import React from 'react';

import {
  Container,
  ProductsHeading,
  Wrapper,
  ProductCard,
  Img,
  Info,
  Title,
  Desc,
  Price,
  Button 
} from './styles';

function Products({ heading, data }) {
  return (
    <Container>
      <ProductsHeading>{heading}</ProductsHeading>
      <Wrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <Img src={product.img} alt={product.alt}/>
              <Info>
                <Title>{product.name}</Title>
                <Desc>{product.desc}</Desc>
                <Price>{product.price}</Price>
                <Button>{product.button}</Button>
              </Info>
            </ProductCard>
          )
        })}
      </Wrapper>
    </Container>
  )
}

export default Products;