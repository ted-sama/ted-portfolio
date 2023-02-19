import React from "react";

import Typewriter from "typewriter-effect";

const Intro = ({ setCursorStyle }) => {
  return (
    <div id="intro" className="intro">
      <div
        onMouseEnter={() => setCursorStyle("pointer")}
        onMouseLeave={() => setCursorStyle("default")}
        class="typewriter-wrapper"
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hi ! ")
              .pauseFor(750)
              .typeString(
                `I'm <strong style="color: #8223f0; font-weight: 800">Teddy</strong>`
              )
              .pauseFor(800)
              .deleteChars(2)
              .typeString(".")
              .start();
          }}
          options={{
            cursorClassName: "intro-cursor",
            wrapperClassName: "intro-typist",
          }}
        />
      </div>

      <h2 className="intro-about">
        I'm a front-end developer and I often create other stuff.
      </h2>
    </div>
  );
};

export default Intro;
