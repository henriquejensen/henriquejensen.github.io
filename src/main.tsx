import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "swiper/css";
import "swiper/css/navigation";

const container = document.getElementById("root");
if (container === null) throw new Error("Root container missing in index.html");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
