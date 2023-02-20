import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const About = ({ setCursorStyle }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-left">
        <h2 data-aos="fade-up" data-aos-once="true" className="section-header">
          <span>À propos</span>
        </h2>
        <div className="about-content">
          <p data-aos="fade-up" data-aos-once="true">
            Bonjour, je m'appelle Teddy Nsoki ou Ted. Je suis un jeune
            développeur principalement axé sur la création de sites web ou
            d'applications. Passionné de musique, cinéma et de jeux-vidéos,
            j'aime apporter ma créativité dans mes projets et expérimenter avec
            des nouvelles technologies.
          </p>
          <p data-aos="fade-up" data-aos-once="true">
            Voici les technologies que j'utilise actuellement :
          </p>
          <div className="about-techs">
            <ul>
              <li data-aos="fade-up" data-aos-once="true" className="html">
                HTML5
              </li>
              <li
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="50"
                className="css"
              >
                CSS3/SCSS
              </li>
              <li
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="100"
                className="js"
              >
                JavaScript
              </li>
              <li
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="150"
                className="node"
              >
                Node.js
              </li>
              <li
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="200"
                className="react"
              >
                React
              </li>
              <li
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="250"
                className="py"
              >
                Python
              </li>
            </ul>
          </div>
        </div>
        <div className="about-links">
          <a
            onMouseEnter={() => setCursorStyle("pointer")}
            onMouseLeave={() => setCursorStyle("default")}
            href="/static/resume.pdf"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Curriculum Vitae
          </a>
          <Link
            onMouseEnter={() => setCursorStyle("pointer")}
            onMouseLeave={() => setCursorStyle("default")}
            smooth
            spy
            to="contact"
            duration={450}
          >
            Contactez moi
          </Link>
        </div>
      </div>
      <div className="about-right">
        <div data-aos="fade-up" data-aos-once="true" className="about-img">
          <img src="static/about-me.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
