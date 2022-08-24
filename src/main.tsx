import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import ButtonCTAWhats from "./components/ButtonCTA/ButtonCTAWhats";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <ButtonCTAWhats />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
