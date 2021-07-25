import React from 'react';
import InputStyled from './style';

const InputSearch = ({ getEvent, placeholder }) => {
    return (
      <InputStyled 
        onChange={ (event) => getEvent(event.target.value) } placeholder={ placeholder } 
      />
    );
}

export default InputSearch;