import React from "react";

const style = {
  display: "flex",
  color: "#6A6C6E",
  fontFamily: "ostrich-sans-light",
  lineHeight: "1",
  fontSize: "2.5rem",
  marginTop: "60px",
  flexDirection: "column",
  maxWidth: "50%",
  margin: "auto",
  marginLeft: "80px",
  backfaceVisibility: "hidden"
};

export default function AboutPage() {
  return (
    <div style={style}>
      <h1>About Me</h1>
      <p>
        I'm Adrian Gomez, a Web Developer based in Southern California. I have
        found my passion in web development and design. I love tech and problem
        solving in all aspects. I specialize in the MERN stack and all the bits
        and bytes in between, but will gladly explore other avenues. Similar to
        the tech world, I am always in development.
      </p>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/adrianindevelopment/"
          style={{ maxWidth: 40, margin: "auto" }}
        >
          <img
            src={require("../images/icons/linkedin.svg")}
            alt=""
            style={{
              width: 40,
              height: 30,
              margin: 0,
              padding: 0
            }}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/apgomez85/"
          style={{ maxWidth: 40, margin: "auto" }}
        >
          <img
            src={require("../images/icons/github-icon.svg")}
            alt=""
            style={{
              width: 40,
              height: 30,
              margin: 0,
              padding: 0
            }}
          />
        </a>
      </div>
    </div>
  );
}
