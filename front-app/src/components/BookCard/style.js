import styled from 'styled-components';

/*
  ${({ title }) => console.log(title)}
*/

export const CardStyled = styled.div`

  display:flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 5px;
  text-align: center;
  width: auto;
  height: auto;
  gap: 1rem;
  margin-bottom: 2rem;

  img {
    width: 6rem;
    height: 10rem;
    border-radius: 0 10px 10px 0;
    border: 1px solid #8989A2;
    overflow: hidden;
  }

  h4 {
    color: ${({ title }) => title === 'Destaques' ? '#FEFEFF' : 'rgb(117, 117, 142)'};
    font-weight: 400;
    height: 2.2rem;
    overflow-y: auto;
  }
`