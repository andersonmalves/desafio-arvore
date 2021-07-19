import React, { useEffect, useState } from 'react';
import * as cp from '../../components';
import * as css from './style';
import * as api from '../../services/fetchAPI';

const Bookshelf = (query, amount) => {
  const [listBooks, setListBooks] = useState([])

  useEffect(() => {
    const request = async () => {
      const result = await api.getBooks(query, amount)
      setListBooks(result)
    }
    request()
  }, [query, amount]);

  return (
    <>
      <css.Category title={ query.query }>{query.query}</css.Category>
      <css.BookshelfStyle title={ query.query }>
        {
          listBooks.map((book) => (
            <cp.BookCard
              title={book.volumeInfo.title}
              key={book.id}
              image={book.volumeInfo.imageLinks}
              category={ query.query }
            />
          ))
        }
      </css.BookshelfStyle>
    </>
  )
}

export default Bookshelf;