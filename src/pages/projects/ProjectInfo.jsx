import { motion, AnimatePresence } from "framer-motion";

const ProjectInfo = ({ project }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col gap-4"
      >
        <p className="text-sm text-gray-300">
          {project.project}
        </p>

        <h1 className="text-5xl font-semibold leading-tight">
          {project.title}
        </h1>

        <p className="text-sm text-gray-400 max-w-md">
          {project.description}
        </p>
        {/* github logo */}
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectInfo;

// import React from "react";
// import { motion } from "framer-motion";
// import OtherInfo from "./OtherInfo";

// const ProjectInfo = ({ transitionData, currentProjectData }) => {
//   return (
//     <>
//       <motion.span layout className="mb-2 h-1 w-5 rounded-full bg-white" />
//       <OtherInfo
//         data={transitionData || currentProjectData?.data}
//       />
//       <motion.div layout className="mt-5 flex items-center gap-3">
//         <button className="flex h-10.25 items-center justify-center rounded-full bg-yellow-500 text-xs transition duration-300 ease-in-out hover:opacity-80">
//           github
//         </button>
//       </motion.div>
//     </>
//   );
// };

// export default ProjectInfo;
