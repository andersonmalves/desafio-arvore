import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  body {
    margin: 0;
    padding: 0;
    outline: 0;
    display: flex;

    align-items: center;
    justify-content: center;
    font-family: Open-sans, Arial, Helvetica, sans-serif, sans-serif;
    
    ::-webkit-scrollbar-track {
    background-color: black;
    }
    ::-webkit-scrollbar {
    width: 6px;
    background: #F4F4F4;
    margin: 0;
    padding: 0;
    }
    ::-webkit-scrollbar-thumb {
    background: #FFD100;
    }
  }

  @keyframes is-rotating {
    to {
      transform: rotate(2turn);
    }
  }
`;

export default GlobalStyle;