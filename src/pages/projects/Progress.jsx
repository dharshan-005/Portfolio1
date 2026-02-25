import React from "react";
import { motion } from "framer-motion";

const Progress = ({ curIndex, length }) => {
  return (
    <>
      {/* Progress bar */}
      <div className="flex h-px flex-1 items-center rounded-full bg-white bg-opacity-50">
        <div
          style={{
            width: `${((curIndex + 1) / length) * 100}%`,
          }}
          className="h-px rounded-full bg-yellow-400 bg-opacity-50"
        />
      </div>

      {/* Index animation */}
      <span
        key={curIndex}
        style={{
          overflow: "hidden",
          display: "inline-block",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="flex items-center text-4xl font-medium"
        >
          0{curIndex + 1}
        </motion.div>
      </span>
    </>
  );
};

export default Progress;
