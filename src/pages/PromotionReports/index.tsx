import React from 'react';
import { Container, LeftSide, CardsContainer, RightSide } from './styles';
import TextFieldComponent from '../../components/TextField';
import InfoValueCard from '../../components/InfoValueCard';
import { AiOutlineRise } from "react-icons/ai";
import { MdPeople } from "react-icons/md";
import LineChartBox from '../../components/LineChartBox';

const PromotionReports: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        <TextFieldComponent />

        <CardsContainer>
          <InfoValueCard 
            icon={<AiOutlineRise />} 
            title="Faturamento"
            value="300.00"
            unit="R$"
            valueConfig='prefix'
            contrast={true}
          />

          <InfoValueCard 
            icon={<MdPeople />} 
            title="Participantes"
            value="100"
            unit="clientes"
            valueConfig='sufix'
          />
        </CardsContainer>

        <LineChartBox />
        
      </LeftSide>
      <RightSide>

      </RightSide>
    </Container>
  )
}

export default PromotionReports;