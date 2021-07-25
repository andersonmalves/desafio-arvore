import React, { useState, useContext } from 'react';
import logo from '../../assets/logo.svg';
import * as cp from '../../components';
import * as css from './style';
import BooksContext from '../../context/BooksContext';

function Header(props) {
  const { setSearchTerm } = useContext(BooksContext)
  const [ inputActive, setInputActive ] = useState(false);
  return (
    <css.headerStyled>
      {
        inputActive ? (
          <cp.InputSearch 
            placeholder="Buscar por livros ou autores"
            getEvent={ (e) => setSearchTerm(e)}
          
          />
        ) : (
          <img src={ logo } alt="Logo Google Livros" />
        )
      }
      <cp.SearchButton  getEvent={() => setInputActive(!inputActive)} />
    </ css.headerStyled>
  );
} 

export default Header;