import { createRoot } from "react-dom/client";
import Course from "./Course";
import Footer from "./Footer";
import "./style.css";

const root = createRoot(document.getElementById("root"));

const version = 19;
const year = new Date().getFullYear();

root.render(
  <div className="container">
    <h1>Hello React {version} </h1>
    <hr />
    <Course />
    <hr />
    <footer>
      <Footer />
    </footer>
  </div>
);
