import React from "react";
import ReactDOM from "react-dom/client";

import { Landpage } from "./pages/landpage";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import { SignIn } from "./pages/sign-in";
import { WhoAreYou } from "./pages/who-are-you";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <WhoAreYou />
    </ThemeProvider>
  </React.StrictMode>
);
