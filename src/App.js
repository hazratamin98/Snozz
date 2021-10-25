import { render } from "@testing-library/react";
import React from "react";
import "./App.css";
import Main_page from "./components/main__page";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  render();
  return (
    <div>
      <Navbar />
      <Main_page />
      <Footer />
    </div>
  );
}

export default App;
