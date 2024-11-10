import React from "react";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";

function App() {
  // Define all variables here
  const username = "Liz";
  const city = "New York";
  const bio = "I am a passionate web developer who loves creating impactful websites.";
  const github = "https://github.com/liz";
  const linkedin = "https://linkedin.com/in/liz";

  return (
    <div>
      <NavBar />
      <Home username={username} city={city} />
      <About bio={bio} github={github} linkedin={linkedin} />
    </div>
  );
}

export default App;
