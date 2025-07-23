import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LearnProvider } from "./contexts/learnContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LearnProvider>
      <App />
    </LearnProvider>
  </StrictMode>
);
