import React from "react";
import Home from "./Home";
import About from "./About";
import Links from "./Links";
import NavBar from "./NavBar";  // Import NavBar component
import user from "../data/user";  // Import user data from user.js

function App() {
  const { name, city, bio, color, links } = user;
  const { github, linkedin } = links;

  return (
    <div>
      <NavBar /> {/* Display NavBar */}
      <Home username={name} city={city} color={color} />
      <About bio={bio} />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default App;
