import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ data, className, variants }) => {
  return (
    <span
      style={{
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      <motion.p
        className={className}
        variants={variants}
        key={data}
      >
        {data}
      </motion.p>
    </span>
  );
};

export default AnimatedText;