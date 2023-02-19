import { useState } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Intro from "../components/Intro";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";

export default function Home() {
  const [cursorStyle, setCursorStyle] = useState("default");

  return (
    <div>
      <Head>
        <title>Ted.</title>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@500,300,400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar setCursorStyle={setCursorStyle} />
      <Cursor style={cursorStyle} />
      <div className={styles.container}>
        <Intro setCursorStyle={setCursorStyle} />
        <About setCursorStyle={setCursorStyle} />
        <Work setCursorStyle={setCursorStyle} />
        <Contact setCursorStyle={setCursorStyle} />
      </div>
    </div>
  );
}
