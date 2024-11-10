import React from "react";
import Links from "./Links"; // Import the Links component

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Conditional rendering for bio */}
      {bio && bio.trim() !== "" && <p>{bio}</p>} {/* Only render bio if it is provided and not empty */}
      
      {/* Pass the github and linkedin props to Links component */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
