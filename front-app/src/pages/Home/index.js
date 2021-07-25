import React, { useContext } from 'react';
import { Loading } from '../../components';
import * as view from '../../views';
import * as css from './style';
import BooksContext from '../../context/BooksContext'


const Home = () => {
  const { isLoading, searchTerm } = useContext(BooksContext);
    return (
      <>
        <css.HomeStyle>
          <view.Header />
          {
            isLoading ? (
              searchTerm === '' ?
              (<>
                <view.Bookshelf query={ 'Aventura' } amount={ 10 } />
                <view.Bookshelf query={ 'Infantil' } amount={ 10 } />
                <view.Bookshelf query={ 'Destaques' } amount={ 10 } />
                <view.Bookshelf query={ 'Acao' } amount={ 10 } />
              </>) : (
                <view.SearchedBooks query={ searchTerm} amount={ 10 } />
              )
            ) : (
              <Loading />
            )
          }
        </ css.HomeStyle>
      </>
    );
};

export default Home;

