import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./AppComp.jsx";
import "./index.css";
import Test from "./components/test";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Test />
  </StrictMode>
);
