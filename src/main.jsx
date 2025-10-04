import { createRoot } from "react-dom/client";
import Header from "./Header";
import Course from "./Course";
// import Card from "./Card";
import Footer from "./Footer";
import Counter from "./Counter";
import "./style.css";

const root = createRoot(document.getElementById("root"));

// const version = 19;
// const year = new Date().getFullYear();
// const t = "React 19 with Vite";

root.render(
  <div className="container">
    <Header />
    <Course />
    {/* <div className="row">
      <div className="col-3">
        <Card title="Iphone 16" mrp={100} price={90} offer="30%" />
      </div>
      <div className="col-3">
        <Card title="Samsung Galaxy s25" mrp={500} price={450} />
      </div>
      <div className="col-3">
        <Card title="Samsumg 35" />
      </div>
      <div className="col-3">
        <Card />
      </div>
    </div> */}
    <Counter></Counter>
    <Footer />
  </div>
);
