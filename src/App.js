import React from "react";
import "./App.css";
import ParticlesBackground from "./components/particles-background";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import Footer from "./components/footer/footer";

const App = () => (
  <div>
    <ParticlesBackground />
    <Header />
    <HomePage />
    <Footer />
  </div>
);

export default App;
