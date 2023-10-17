import { ThemeProvider } from "styled-components";
import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./styles/theme.ts";
import GlobalStyles from "./styles/GlobalStyles.ts";
import App from "./App.tsx";
import UserContextProvider from "./context/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
