import { createRoot } from "react-dom/client";
import Header from "./Header";
import Course from "./Course";
import Footer from "./Footer";
import "./style.css";

const root = createRoot(document.getElementById("root"));

// const version = 19;
// const year = new Date().getFullYear();
const t = "React 19 with Vite";

root.render(
  <div className="container" title={t}>
    <Header />
    <Course />
    <Footer />
  </div>
);
