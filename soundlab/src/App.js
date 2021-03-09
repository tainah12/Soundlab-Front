import { ThemeProvider } from "@material-ui/styles";
import React from "react"
import theme from "./constants/theme";
import Router from "./routes/Router"
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
