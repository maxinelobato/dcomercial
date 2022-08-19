import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import ButtonCTAWhats from "./components/PageHome/ButtonCTA/ButtonCTAWhats";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ButtonCTAWhats />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
