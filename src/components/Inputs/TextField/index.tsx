import { TextField, InputAdornment } from '@material-ui/core';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Container } from './styles'

const TextFieldComponent: React.FC = () => (
  <Container>
    <TextField
      id="outlined-search"
      label="Procurar um cliente..."
      type="search"
      variant="outlined"
      InputProps={{
        startAdornment: <InputAdornment position="start"><AiOutlineSearch/></InputAdornment>,
      }}
      fullWidth={true}
    />
  </Container>
)

export default TextFieldComponent;