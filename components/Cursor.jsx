import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = ({ style }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  //console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },

    pointer: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.8,
      backgroundColor: "rgba(130, 35, 240, 0.2)",
      borderColor: "#8223f0",
    },
  };

  return <motion.div className="cursor" variants={variants} animate={style} />;
};

export default Cursor;
