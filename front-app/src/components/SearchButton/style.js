import styled from 'styled-components';

export const buttonStyled = styled.button`
  width: 70px;
  height: 70px;
  padding: 5px 10px;
  transition: all ease 0.2s;
  outline: none;
  transform: scale(0.9);
  transform: all ease 0.2s;
  background-color: transparent;
  border: none;

  :hover {
    cursor: pointer;
  }

  :active {
    transform: scale(1);
  }
`
export default buttonStyled;
