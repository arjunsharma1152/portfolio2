import React from "react";
import "./App.css";
import ParticlesBackground from "./components/particles-background";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";

const App = () => (
  <div>
    <ParticlesBackground />
    <Header />
    <HomePage />
  </div>
);

export default App;
