import React from "react";
import Links from "./Links";

function About({ bio, links }) {
  return (
    <section id="about">
      {bio && bio.trim() !== "" && <p>{bio}</p>}
      <Links github={links.github} linkedin={links.linkedin} />
    </section>
  );
}

export default About;
