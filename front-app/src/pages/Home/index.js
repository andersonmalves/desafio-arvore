import React, { Component, useContext } from 'react';
import { Header, Loading } from '../../components';
import * as view from '../../views';
import * as css from './style';
import BooksContext from '../../context/BooksContext'


const Home = () => {
  const { isLoading } = useContext(BooksContext);
    return (
      <>
      <css.HomeStyle>
        <Header />
        <h1>Initial</h1>
        {isLoading ? <Loading> :
          <>
            <view.Bookshelf query={ 'Aventura' } amount={ 10 } />
            <view.Bookshelf query={ 'Infantil' } amount={ 10 } />
            <view.Bookshelf query={ 'Destaques' } amount={ 10 } />
            <view.Bookshelf query={ 'Acao' } amount={ 10 } />
          </>
        }
      </ css.HomeStyle>
    </>
    );
};

export default Home;
