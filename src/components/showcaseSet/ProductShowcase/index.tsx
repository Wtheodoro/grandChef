import React from 'react';
import HeaderWithSelect from '../HeaderWithSelect';
import ProductTrack from '../tracks/ProductTrack';
import Products from '../../../assets/db/products'
import { Container } from './styles';

const ProductShowcase: React.FC = () => {
 
  const options = [
    {key: "Mais vendidos", value: "mostSold"},
    {key: "Mais avaliados", value: "mostRated"},
    {key: "Maior preço", value: "biggestPrice"},
    {key: "Menor preço", value: "lowestPrice"},
    {key: "Promoções", value: "promotions"}
  ]

  return (
    <Container>
      <HeaderWithSelect selectType="Produtos" selectOptions={options}>
        Produtos
      </HeaderWithSelect>
      {
        Products.map(i => (
          <ProductTrack
            key={i.name}
            name={i.name}
            amount={i.amount}
            price={i.price}
            priceOff={i.priceOff}
            image_url={i.image_url}
            points={i.points}
            rescue={i.rescue}
          />
        ))
      }
    </Container>
  )
}

export default ProductShowcase;