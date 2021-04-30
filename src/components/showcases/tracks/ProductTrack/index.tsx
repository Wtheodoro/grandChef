import React, { useState } from 'react';
import { Container, LeftSide, RightSide, Top, Bottom } from './styles';

interface IProductTrack {
  name: string
  amount: number
  price: number
  priceOff: number
  points?: number
  rescue?: number
  image_url: string
}

const ProductTrack: React.FC<IProductTrack> = ({ 
  amount, image_url, name, points, price, priceOff, rescue
 }) => {

  const [showBot, setShowBot] = useState<boolean>(true)

  return (
    <Container>
      <Top>
        <LeftSide>
          <div className="detail"/>
          <img src={image_url} alt={`Imagem de um ${name}`}/>
          <div className="NameAmount">
            <p className="product_name">{name}</p>
            <p>Quantidade: {amount}</p>
          </div>
        </LeftSide>

        <RightSide>
          <p>Preço / Promoção</p>
          <p>R$ {price} / <span>R$ {priceOff}</span></p>
        </RightSide>
      </Top>
      
      {
        points &&
        <Bottom>
          <p>Pontos: <span>{points} pts</span></p>
          <p>Resgates: <span>{rescue} pts</span></p>
        </Bottom>
      }
    </Container>
  )
}

export default ProductTrack;