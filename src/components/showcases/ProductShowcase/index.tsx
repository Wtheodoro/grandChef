import React from 'react';
import HeaderWithSelect from '../HeaderWithSelect';
import ProductTrack from '../tracks/ProductTrack';
import Products from '../../../assets/db/products'
import { Container } from './styles';

const ProductShowcase: React.FC = () => {

  const options = ["Mais vendidos", "Mais avaliados", "Maior preço", "Menor preço", "Promoções"]

  return (
    <Container>
      <HeaderWithSelect selectType="Produtos" selectOptions={options}>
        Produtos
      </HeaderWithSelect>
      {
        Products.map(i => (
          <ProductTrack 
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