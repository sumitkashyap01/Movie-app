import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-circular-progressbar/dist/styles.css";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
