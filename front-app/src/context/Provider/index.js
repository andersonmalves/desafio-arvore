import React, { useState } from 'react';
import BookContext from '../BooksContext';
// import * as api from '../../services/fetchAPI';

function Provider({children}) {
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  const contextValue = {
    isLoading,
    setIsLoading,
    searchTerm,
    setSearchTerm
  };

  return (
    <BookContext.Provider value={ contextValue }>
      { children }
    </BookContext.Provider>

  )

};

export default Provider;
