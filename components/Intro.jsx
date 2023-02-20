import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Typewriter from "typewriter-effect";

const Intro = ({ setCursorStyle }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="intro" className="intro">
      <div
        onMouseEnter={() => setCursorStyle("pointer")}
        onMouseLeave={() => setCursorStyle("default")}
        class="typewriter-wrapper"
        data-aos="fade-up"
        data-aos-once="true"
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

      <h2
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="500"
        className="intro-about"
      >
        {/* I'm a front-end developer and I often create other stuff. */}
        Je suis un développeur front-end et je crée souvent d'autres choses.
      </h2>
    </section>
  );
};

export default Intro;
