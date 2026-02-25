// const BackgroundImage = ({ currentProjectData }) => {
//   return (
//     <motion.img
//       key={currentProjectData.data.id}
//       src={currentProjectData.data.img}
//       alt="Background"
//       className="absolute inset-0 z-0 h-full w-full object-cover brightness-50"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//     />
//   );
// };

// export default BackgroundImage;

// import React from "react";
// import { motion } from "framer-motion";

// const BackgroundImage = ({ transitionData, currentProjectData }) => {
//   return (
//     <>
//       {transitionData?.img && (
//         <motion.img
//           key="transition-image"
//           layoutId={`transition-${transitionData.img}`}
//           alt="Transition Image"
//           src={transitionData.img}
//           transition={{
//             opacity: { ease: "linear" },
//             layout: { duration: 0.6 },
//           }}
//           className="absolute left-0 top-0 z-0 h-full w-full object-cover brightness-50"
//         />
//       )}

//       {currentProjectData?.data?.img && (
//         <motion.img
//           key="current-image"
//           alt="Current Image"
//           src={currentProjectData.data.img}
//           className="absolute left-0 top-0 h-full w-full object-cover brightness-50"
//         />
//       )}
//     </>
//   );
// };

// import { motion } from "framer-motion";

// const BackgroundImage = ({ activeProject }) => {
//   if (!activeProject) return null
  
//   return (
//     <motion.img
//     layoutId={`project-image-${activeProject.id}`}
//     src={activeProject.img}
//     className="absolute inset-0 h-full w-full object-cover brightness-50"
//     />
//   )
// }

// export default BackgroundImage;

import { motion } from "framer-motion";

const BackgroundImage = ({ project }) => {
  return (
    <motion.img
      src={project.img}
      alt={project.title}
      className="absolute inset-0 h-full w-full object-cover brightness-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    />
  );
};

export default BackgroundImage;
