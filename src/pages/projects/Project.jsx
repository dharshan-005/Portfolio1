import ProjectCard from "./ProjectCard";

function Project({ data, activeIndex }) {
  return (
    <div className="flex w-full gap-6 overflow-hidden">
      {data.map((project, index) => (
        <ProjectCard
          key={project.id}
          data={project}
          index={index}
          activeIndex={activeIndex}
        />
      ))}
    </div>
  );
}

export default Project;

// import React from "react";
// import ProjectCard from "./ProjectCard";

// function Project({ data }) {
//   return (
//     <div className="flex w-full gap-6">
//       {data.map((project) => (
//         <ProjectCard
//           key={project.id}
//           data={project}
//         />
//       ))}
//     </div>
//   );
// }

// export default Project;
