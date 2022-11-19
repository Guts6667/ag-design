import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Scroller from "./Components/Scroller";
import "./index.scss";
import About from "./Pages/About";
import Home from "./Pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Scroller />
    <Home />
    <About />
  </React.StrictMode>
);
