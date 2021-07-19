import styled from 'styled-components';

export const BookshelfStyle = styled.div`
  background-color: ${({ title}) => title === 'Destaques' ? '#00B0F2' : '#FEFEFF'};
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  width: 100%;
  gap: 4rem;
  border-radius: 3px;
  position: relative;
  padding: 1rem 2rem 0 2rem;
  margin-bottom: 1rem;

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
  ::-webkit-scrollbar {
    background: rgba(0, 0, 0, 0);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0);
  }
`

export const Category = styled.h2`
  font-size: 1.6rem;
  color: ${({ title }) => title === 'Destaques' && '#FEFEFF'};
  background-color: ${({ title }) => title === 'Destaques' && '#00B0F2'};
  width: 100%;
  text-align: left;
  text-indent: 2rem;
`