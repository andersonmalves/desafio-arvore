import React, { useEffect, useState } from 'react';
import * as cp from '../../components';
import * as css from './style';
import * as api from '../../services/fetchAPI';

const SearchedBooks = (query, amount) => {
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
      <css.Category title={ query.query }>{ `Buscando por: ${query.query}` }</css.Category>
      <css.SearchedBooksStyle title={ query.query }>
        {
          listBooks && listBooks.map((book) => (
            <cp.BookCard
              title={book.volumeInfo.title}
              key={book.id}
              image={book.volumeInfo.imageLinks}
              category={ query.query }
            />
          ))
        }
      </css.SearchedBooksStyle>
    </>
  )
}

export default SearchedBooks;