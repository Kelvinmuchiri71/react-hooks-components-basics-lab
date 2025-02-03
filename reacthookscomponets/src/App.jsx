import React from "react";
import "./App.css"; // Make sure to create this CSS file

function Navbar() {
  return (
    <nav>
      <a href="#">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
