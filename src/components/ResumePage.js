import React from "react";

export default function ResumePage() {
  return (
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/1r2qErkujfzf51FEGGOSfmPIUeyh2Ir49/view"
        download
      >
        <button
          style={{
            padding: "1rem 3rem",
            background: "#ccb1bf",
            border: "none",
            color: "white",
            fontSize: ".8rem",
            cursor: "pointer",
            transition: "background 0.5s ease-in-out"
          }}
        >
          Download
        </button>
      </a>

      <div>
        <img
          src={require("../images/Resume.png")}
          alt=""
          style={{
            width: "70%",
            height: "auto",
            boxShadow:
              "0px 10px 10px rgba(0, 0, 0, 0.1), 0px 20px 20px rgba(0, 0, 0, 0.1)",
            backfaceVisibility: "hidden"
          }}
        />
      </div>
    </div>
  );
}
