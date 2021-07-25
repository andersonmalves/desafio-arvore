import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import * as cp from '../../components';
import * as css from './style';

function Header(props) {
  const [ inputActive, setInputActive ] = useState(false);
  return (
    <css.headerStyled>
      { inputActive ? <cp.InputSearch placeholder="Buscar por livros ou autores" /> : <img src={ logo } alt="Logo Google Livros" /> }
      <cp.SearchButton  getEvent={() => setInputActive(!inputActive)} />
    </ css.headerStyled>
  );
}

export default Header;