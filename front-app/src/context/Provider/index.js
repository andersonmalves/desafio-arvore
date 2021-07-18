import React, { useState, useEffect } from 'react';
import BookContext from '../BooksContext';
import * as api from '../../services/fetchAPI';

function Provider({children}) {
  const [listBooks, setListBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // const result = api.getBooks();
    function requestData() {
      api.getBooks().then((data) => {
        setListBooks(data)
        setIsLoading(false)
      })
    }
    requestData();
  }, [listBooks]);

  const contextValue = {
    listBooks,
    setListBooks,
    isLoading,
    setIsLoading,
  };

  return (
    <BookContext.Provider value={ contextValue }>
      { children }
    </BookContext.Provider>

  )

};

export default Provider;
