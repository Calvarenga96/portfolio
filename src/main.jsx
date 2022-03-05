import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DataProvider } from "./context/DataContext";
import theme from "./theme/themeConfig";

ReactDOM.render(
  <BrowserRouter>
    <DataProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </DataProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
