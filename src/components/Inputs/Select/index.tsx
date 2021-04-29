import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { Container } from './styles';
import { FormControl, InputLabel } from '@material-ui/core';

const SelectInput: React.FC = () => {
  return (
    <Container>
      <FormControl variant="outlined" fullWidth={true}>
        <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
        <Select
          labelId="select-outlined-label"
          id="select-outlined"
          label="Type"
        >
          <MenuItem value='percentage'>Porcentagem</MenuItem>
          <MenuItem value='amount'>Quantidade</MenuItem>
          <MenuItem value='frequency'>Frequência</MenuItem>
        </Select>
      </FormControl>
    </Container>
  )
}

export default SelectInput;