import React, { Component, useContext } from 'react';
import { Header, Loading } from '../../components';
import * as view from '../../views';
import * as css from './style';
import BooksContext from '../../context/BooksContext'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  const { Loading, isLoading} = useContext(BooksContext);

  render() {
    return (
      <css.HomeStyle>
        <Header />
        {Loading ? <Loading> :
          <>
            <view.Bookshelf query={ 'Aventura' } amount={ 10 } />
            <view.Bookshelf query={ 'Infantil' } amount={ 10 } />
            <view.Bookshelf query={ 'Destaques' } amount={ 10 } />
            <view.Bookshelf query={ 'Acao' } amount={ 10 } />
          </>
        }
        <h1>Initial</h1>
      </css.HomeStyle>
    );
  };
};

export default Home;
