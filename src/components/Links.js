import React from "react";

function Links({ github, linkedin }) {
  return (
    <section>
      <h3>Links</h3>
      {github && (
        <a href={github}>
          {github}
        </a>
      )}
      {linkedin && (
        <a href={linkedin} >
          {linkedin}
        </a>
      )}
    </section>
  );
}

export default Links;
