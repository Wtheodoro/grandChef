import React from 'react';
import HeaderWithSelect from '../HeaderWithSelect';
import ProductTrack from '../tracks/ProductTrack';

import { Container } from './styles';

const ProductShowcase: React.FC = () => {

  const options = ["Mais vendidos", "Mais avaliados", "Maior preço", "Menor preço", "Promoções"]

  return (
    <Container>
      <HeaderWithSelect
        selectType="Produtos"
        selectOptions={options}
      >Produtos</HeaderWithSelect>
      <ProductTrack />
      <ProductTrack />
      <ProductTrack />
      <ProductTrack />
    </Container>
  )
}

export default ProductShowcase;