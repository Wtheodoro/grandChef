import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Container } from './styles';
import { FormControl, InputLabel } from '@material-ui/core';

interface ISelectInputProps {
  type: string
  options: {
    key: string
    value: string
  }[]
}

const SelectInput: React.FC<ISelectInputProps> = ({ type, options }) => {



  const strCamelCase = (str: string) => {
    return str.toLocaleUpperCase()
  }

  return (
    <Container>
      <FormControl variant="outlined" fullWidth={true}>
        <InputLabel id="demo-simple-select-outlined-label"
          
        >{type}</InputLabel>
        <Select
          labelId="select-outlined-label"
          id="select-outlined"
          label="Type"
          defaultValue=""
        >
          {
            options?.map((i) => (
              <MenuItem 
                value={i.value} 
                key={i.key}
              >
                {strCamelCase(i.key)}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Container>
  )
}

export default SelectInput;