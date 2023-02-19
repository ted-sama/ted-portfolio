import React from "react";

const About = ({ setCursorStyle }) => {
  return (
    <div id="about" className="about">
      <div className="about-left">
        <h2 className="section-header">
          <span>À propos</span>
        </h2>
        <div className="about-content">
          <p>
            Bonjour, je m'appelle Teddy Nsoki ou Ted. Je suis un jeune
            développeur principalement axé sur la création de sites web ou
            d'applications. Passionné de musique, cinéma et de jeux-vidéos,
            j'aime apporter ma créativité dans mes projets et expérimenter avec
            des nouvelles technologies.
          </p>
        </div>
        <div className="links">
          <a
            onMouseEnter={() => setCursorStyle("pointer")}
            onMouseLeave={() => setCursorStyle("default")}
            href="#"
          >
            Curriculum Vitae
          </a>
          <a
            onMouseEnter={() => setCursorStyle("pointer")}
            onMouseLeave={() => setCursorStyle("default")}
            href="#"
          >
            Contactez moi
          </a>
        </div>
      </div>
      <div className="about-right">
        <div className="about-img">
          <img src="static/about-me.png" alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
