import { createRoot } from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import Example  from "./Example";
import "./style.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <div className="container">
    <Header />
    <Example />
    <Footer />
  </div>
);

