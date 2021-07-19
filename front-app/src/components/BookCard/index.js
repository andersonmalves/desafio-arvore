import React from 'react';
import * as css from './style';
import capa from '../../images/capa-nao-disponivel.jpeg';

const BookCard = ({title, image, category}) => {
  return (
    <css.CardStyled title={ category }>
      <img src={ image ? image.thumbnail : capa } alt={title} />
      <h4>{title}</h4>
    </css.CardStyled>
  );
};

export default BookCard;