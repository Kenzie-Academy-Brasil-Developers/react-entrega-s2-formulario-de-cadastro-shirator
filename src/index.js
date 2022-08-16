import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { TechProvider } from "./contexts/TechContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TechProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </TechProvider>
    </BrowserRouter>
  </React.StrictMode>
);
