import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from 'react-helmet-async';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initTheme } from "./shared/ui/theme";

initTheme();

const rootElement = document.getElementById("root");
// Retire le bloc de secours HTML (contenu lisible sans JavaScript) avant le montage.
// Indispensable aussi si le projet migre un jour vers React 18 / createRoot.
rootElement.replaceChildren();

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
