import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga4";
import theme from "./lib/theme/muiTheme";
import App from "./App";

if (process.env.NODE_ENV === "production") {
  // // debug
  // if(process.env.REACT_APP_GA_TRACKING_ID_DEBUG) {
  //   ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID_DEBUG, {gtagOptions: {debug_mode: true}});
  // }

  if (process.env.REACT_APP_GA_TRACKING_ID) {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  }
}

const rootContainer = document.getElementById("root");
const app = (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </ThemeProvider>
  </BrowserRouter>
);
const root = createRoot(rootContainer!);
root.render(app);

// Pre-rendering
// if (rootContainer && rootContainer.hasChildNodes()) {
//   hydrateRoot(rootContainer, app);
// } else {
//   root.render(app);
// }
