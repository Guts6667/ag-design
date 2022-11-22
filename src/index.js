import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./index.scss";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
  </React.StrictMode>
);
