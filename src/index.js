import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const colors= {
  color:{
    brand:'#805ad5', 
    brand101:'#f0eaff',
    brandgradient:'linear(to-tr, purple.500, blue.500)'

  }
}
const theme=extendTheme({colors});

root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
