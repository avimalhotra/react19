import { createRoot } from "react-dom/client";
import "./style.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <div className="container">
    <h1>Hello React 19</h1>
    <p>Text goes here...</p>
  </div>
);
