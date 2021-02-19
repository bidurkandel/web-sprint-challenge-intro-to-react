import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, createGlobalStyle} from 'styled-components';
import theme from "./theme"
import img from "./images/rm-bg.jpg";

const GlobalStyle = createGlobalStyle`
    body{
        background-image: url(${img});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
    }
`;


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>
    , document.getElementById('root')
);
