import React from 'react';

import { Container, LeftSide, RightSide, Top, Bottom } from './styles';

const ProductTrack: React.FC = () => {
  return (
    <Container>
      <Top>
        <LeftSide>
          <div className="detail"/>
          <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/03/Foto-X-Burguer-Hamburguer-Cheeseburguer-PNG-1024x853.png" alt="Xburger"/>
          <div className="NameAmount">
            <p className="product_name">X-burger</p>
            <p>Quantidade: 55</p>
          </div>
        </LeftSide>

        <RightSide>
          <p>Preço / Promoção</p>
          <p>R$ 3,50 / <span>R$ 2,99</span></p>
        </RightSide>
      </Top>
      
      <Bottom>
        <p>Pontos: <span>120 pts</span></p>
        <p>Resgates: <span>33 pts</span></p>
      </Bottom>
    </Container>
  )
}

export default ProductTrack;