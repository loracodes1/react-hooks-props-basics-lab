import React from "react";

function About({ bio }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Conditional rendering of bio */}
      {bio && <p>{bio}</p>}
    </div>
  );
}

export default About;
