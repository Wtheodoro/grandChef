import React from 'react';
import { Container, LeftSide, CardsContainer, RightSide, Content, InputContainer } from './styles';
import TextFieldComponent from '../../components/Inputs/TextField';
import InfoValueCard from '../../components/InfoValueCard';
import { AiOutlineRise } from "react-icons/ai";
import { MdPeople } from "react-icons/md";
import LineChartBox from '../../components/chartSet/chartBox/LineChartBox';
import PieChartBox from '../../components/chartSet/chartBox/PieChartBox';
import MainHeader from '../../components/MainHeader';
import SelectInput from '../../components/Inputs/Select';
import ProductShowcase from '../../components/showcaseSet/ProductShowcase';
import ServiceShowcase from '../../components/showcaseSet/ServiceShowcase';
import DateInput from '../../components/Inputs/DateInput';

const PromotionReports: React.FC = () => {
  return (
    <Container>
      <MainHeader>Relatório de Promoções</MainHeader>

      <Content>
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
          <PieChartBox />
          
        </LeftSide>
        <RightSide>
          <InputContainer>
            <SelectInput 
              type="Tipo" 
              options={[
                {key: 'porcentagem', value: 'percentage'},
                {key: 'quantidade', value: 'amount'}
              ]}
            />

            <DateInput />
          </InputContainer>

          <ProductShowcase />
          <ServiceShowcase />
          
        </RightSide>
      </Content>
      
    </Container>
  )
}

export default PromotionReports;