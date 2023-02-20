import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = ({ setCursorStyle }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="contact" className="contact">
      <h2 data-aos="fade-up" data-aos-once="true" className="section-header">
        <span>Si vous souhaitez travailler avec moi</span>
      </h2>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"
        className="contact-text"
      >
        <p>
          Je suis actuellement disponible !
          <br />
          Contactez moi par mail ou sur LinkedIn et je vous répondrai avec
          plaisir.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        className="contact-links"
      >
        <a
          onMouseEnter={() => setCursorStyle("pointer")}
          onMouseLeave={() => setCursorStyle("default")}
          className="contact-email"
          href="mailto:teddynsoki@gmail.com"
          rel="noopener noreferrer"
          target={"_blank"}
        >
          <span>
            teddynsoki<span className="at">@</span>gmail.com
          </span>
        </a>
        <br />
        <div className="contact-other-links">
          <a
            onMouseEnter={() => setCursorStyle("pointer")}
            onMouseLeave={() => setCursorStyle("default")}
            href="https://www.linkedin.com/in/teddy-nsoki-507138245/"
            rel="noreferrer"
            target={"_blank"}
          >
            <span>LinkedIn</span>
          </a>
          <br />
          <a
            onMouseEnter={() => setCursorStyle("pointer")}
            onMouseLeave={() => setCursorStyle("default")}
            href="https://github.com/ted-sama"
            rel="noreferrer"
            target={"_blank"}
          >
            <span>Github</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
