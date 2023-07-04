import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "jotai";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { chakraTheme } from "./chakraTheme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider>
      <ChakraProvider theme={chakraTheme}>
        <App />
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
