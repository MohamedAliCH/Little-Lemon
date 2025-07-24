import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import DealsBanner from "./components/DealsBanner";
import ContentSections from "./components/ContentSections";
import Footer from "./components/Footer";
import "./App.css";
import Main from "./components/Main";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
