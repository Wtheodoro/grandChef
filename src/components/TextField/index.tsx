import { TextField, InputAdornment } from '@material-ui/core';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const TextFieldComponent: React.FC = () => (
  <TextField
    id="outlined-search"
    label="Search field"
    type="search"
    variant="outlined"
    InputProps={{
      startAdornment: <InputAdornment position="start"><AiOutlineSearch/></InputAdornment>,
    }}
  />
)

export default TextFieldComponent;