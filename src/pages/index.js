import React from "react";
import headerStyles from "./header.module.css";

export default () => (
  <header className={headerStyles.header}>
    <h1>
      Hi, I'm Victor.{" "}
      <span role="img" aria-label="waving hand">
        👋🏾
      </span>
    </h1>
    <h1>I'm a Front-End Developer.</h1>
    <p>This site is currently under construction.</p>
    <p>
      In the meantime, please take a look at my{" "}
      <a
        href="https://github.com/victorinspace"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      , follow me on{" "}
      <a
        href="https://twitter.com/victorinspace"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      , or view my{" "}
      <a
        href="https://www.linkedin.com/in/victor-dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      .
    </p>
  </header>
);
