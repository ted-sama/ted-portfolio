import React from "react";
import { Link } from "react-scroll";
import styles from "../styles/Navbar.module.scss";

const Navbar = ({ setCursorStyle }) => {
  return (
    <header className={styles.navHeader}>
      <nav className={styles.navbar}>
        <Link
          onMouseEnter={() => setCursorStyle("pointer")}
          onMouseLeave={() => setCursorStyle("default")}
          smooth
          spy
          to="intro"
          duration={450}
        >
          <div className="nav-logo">
            <span>LOGO</span>
          </div>
        </Link>
        <div className="nav-links">
          <ul>
            <li>
              <Link
                onMouseEnter={() => setCursorStyle("pointer")}
                onMouseLeave={() => setCursorStyle("default")}
                smooth
                spy
                to="intro"
                duration={450}
              >
                Acceuil
              </Link>
            </li>
            <li>
              <Link
                onMouseEnter={() => setCursorStyle("pointer")}
                onMouseLeave={() => setCursorStyle("default")}
                smooth
                spy
                to="about"
                duration={450}
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                onMouseEnter={() => setCursorStyle("pointer")}
                onMouseLeave={() => setCursorStyle("default")}
                smooth
                spy
                to="work"
                duration={450}
              >
                Projets
              </Link>
            </li>
            <li>
              <Link
                onMouseEnter={() => setCursorStyle("pointer")}
                onMouseLeave={() => setCursorStyle("default")}
                smooth
                spy
                to="contact"
                duration={450}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
