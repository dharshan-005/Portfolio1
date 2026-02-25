import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const item = {
  hidden: {
    y: "100%",
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.85,
    },
  },
  visible: {
    y: 0,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.75,
    },
  },
};

const OtherInfo = ({ data }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col"
    >
      <AnimatedText
        className="spacing overflow-hidden text-[#D5D5D6]"
        data={data?.project}
        variants={item}
      />

      <AnimatedText
        className="my-1 text-4xl font-semibold md:my-3 md:text-8xl md:leading-25"
        data={data?.title}
        variants={item}
      />

      <AnimatedText
        className="text-xs text-[#D5D5D6]"
        data={data?.description}
        variants={item}
      />
    </motion.div>
  );
};

export default OtherInfo;
