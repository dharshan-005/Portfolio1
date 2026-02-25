import { motion } from "framer-motion";

const ProjectCard = ({ data, index, activeIndex }) => {
  const offset = index - activeIndex;

  return (
    <motion.div
    initial={{scale: 0.8, opacity: 0}}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="relative h-52 min-w-62.5 rounded-2xl shadow-md md:h-80 md:min-w-62.5"
    >
      <img
        src={data.img}
        alt={data.title}
        className="h-full w-full object-cover absolute rounded-2xl brightness-75"
      />

      <div className="absolute z-10 flex h-full items-end p-4">
        <div className="mb-2 h-0.5 w-3 rounded-full bg-white">
          <p className="text-xs text-[#D5D5D6]">{data.project}</p>
          <h2 className="text-xl leading-6">{data.title}</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

// import { motion } from "framer-motion";

// const ProjectCard = ({ data }) => {
//   return (
//     <motion.div
//       className="relative h-80 w-64 rounded-xl overflow-hidden"
//       whileHover={{ scale: 1.05 }}
//     >
//       <img
//         src={data.img}
//         alt={data.title}
//         className="h-full w-full object-cover"
//       />

//       <div className="absolute bottom-4 left-4">
//         <p className="text-sm">{data.project}</p>
//         <h2 className="text-xl">{data.title}</h2>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;

// import React from "react";
// import { motion } from "framer-motion";

// const ProjectCard = ({ data }) => {
//   return (
//     <motion.div
//       layout
//       layoutId={`project-image-${data.id}`}
//       className="relative h-52 min-w-62.5 rounded-2xl overflow-hidden"
//     >
//       <img src={data.img} className="h-full w-full object-cover" />

//       <div className="absolute bottom-4 left-4 z-10">
//         <p className="text-xs text-gray-300">{data.project}</p>
//         <h1 className="text-xl text-white">{data.title}</h1>
//       </div>
//     </motion.div>

//     // <motion.div
//     //   className="relative h-52 min-w-62.5 rounded-2xl shadow-md md:h-80 md:min-w-62.5"
//     //   layout
//     //   initial={{ scale: 0.8, opacity: 0 }}
//     //   animate={{
//     //     scale: 1,
//     //     opacity: 1,
//     //     transition: {
//     //       duration: 0.4,
//     //     },
//     //   }}
//     //   exit={{ scale: 0.8, opacity: 0 }}
//     //   transition={{
//     //     type: "spring",
//     //     damping: 20,
//     //     stiffness: 100,
//     //   }}
//     // >
//     //   {/* Content Overlay */}
//     //   <motion.div className="absolute z-10 flex h-full items-end p-4">
//     //     <motion.div>
//     //       {/* Divider */}
//     //       <motion.div
//     //         layout
//     //         className="mb-2 h-0.5 w-3 rounded-full bg-white"
//     //       />

//     //       {/* Project */}
//     //       <motion.p
//     //         layoutId={`project-${data?.project}`}
//     //         className="text-xs text-[#D5D5D6]"
//     //       >
//     //         {data?.project}
//     //       </motion.p>

//     //       {/* Title */}
//     //       <motion.h1
//     //         layoutId={`title-${data?.project}`}
//     //         className="text-xl leading-6 text-white"
//     //       >
//     //         {data?.title}
//     //       </motion.h1>
//     //     </motion.div>
//     //   </motion.div>
//     // </motion.div>
//   );
// };

// export default ProjectCard;
