import React from 'react';
import { Container } from './styles';
import { BiCalendarEvent } from 'react-icons/bi'

const DateInput: React.FC = () => (
  <Container>
    <div className="left">
      <p>Data</p>
      <strong>Últimos 7 dias</strong>
    </div>
    <BiCalendarEvent />
  </Container>
)

export default DateInput;