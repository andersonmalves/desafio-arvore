import React from 'react';
import * as css from './style';
import lupa from '../../assets/lupa.svg';

const SearchButton = ({getEvent}) => {
    return (
        <css.buttonStyled type="button" onClick={ () => getEvent() }>
            <img src={ lupa } alt="Botão para pesquisar livros" />
        </ css.buttonStyled>
    );
  }
  
  export default SearchButton;
  
