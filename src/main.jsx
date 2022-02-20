import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataProvider } from "./context/DataContext";
import theme from "./theme/themeConfig";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
