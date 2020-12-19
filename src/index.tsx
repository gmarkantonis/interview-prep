import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ChakraProvider, extendTheme} from "@chakra-ui/react"

const customTheme = extendTheme({ 
  useSystemColorMode: true,
  initialColorMode: "dark"
 })

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
