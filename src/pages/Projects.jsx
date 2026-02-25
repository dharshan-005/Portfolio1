import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BackgroundImage from "./projects/BackgroundImage";
import Project from "./projects/Project";
import Controls from "./projects/Controls";
import ProjectInfo from "./projects/ProjectInfo";
import { projectData } from "./projects/projectData";

import ProjectHeader from "./projects/ProjectHeader"

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projectData[activeIndex];

  return (
    <main className="righteous-regular relative min-h-screen overflow-hidden text-white antialiased">
      <AnimatePresence mode="wait">
        <BackgroundImage key={activeProject.id} project={activeProject} />
      </AnimatePresence>

      <div className="absolute w-full h-full z-20">
        <ProjectHeader />
        <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
          <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center">
            <ProjectInfo project={activeProject} />
          </div>

          <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
            <Project data={projectData} activeIndex={activeIndex} />
            <Controls
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              total={projectData.length}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;

// import React, { useState } from "react";
// // import {Righteous} from "next/font/google"
// import "@fontsource/righteous";
// import { AnimatePresence } from "framer-motion";
// import BackgroundImage from "./projects/BackgroundImage";
// import { initData, projectData } from "./projects/projectData";
// import ProjectHeader from "./projects/ProjectHeader";
// import ProjectInfo from "./projects/ProjectInfo";
// import Project from "./projects/Project";
// import Controls from "./projects/Controls";

// const Projects = () => {
//   const [data, setData] = useState(projectData.slice(1));
//   const [transitionData, setTransitionData] = useState(projectData[0]);
//   const [currentProjectData, setcurrentProjectData] = useState({
//     data: initData,
//     index: 0,
//   });

//   const [activeIndex, setActiveIndex] = useState(0);
//   const activeProject = projectData[activeIndex]

//   return (
//     <>
//       {/* <div className="min-h-screen text-white p-6 ">
//         <div className="flex flex-col items-center">
//           <h1 className="text-4xl font-bold">Projects</h1>
//           <p className="mt-4 text-gray-400">My works will be listed here.</p>
//         </div>
//         <section className="flex justify-center">
//           <div className="grid grid-cols-2 p-8 gap-12">
//             <div className="w-102 h-72 border-2 rounded-3xl p-4">1</div>
//             <div className="w-102 h-72 border-2 rounded-3xl p-4">2</div>
//           </div>
//         </section>
//       </div> */}
//       <main className="relative min-h-screen select-none overflow-hidden text-white antialiased">
//         <AnimatePresence>
//           <React.Fragment key="projects-page">
//             <BackgroundImage
//               // transitionData={transitionData}
//               // currentProjectData={currentProjectData}
//               activeProject={activeProject}
//             />
//             <div className="absolute z-20 h-full w-full">
//               {/* <Navbar /> */}
//               <ProjectHeader />
//               <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
//                 <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center">
//                   <ProjectInfo
//                     transitionData={transitionData}
//                     currentProjectData={currentProjectData}
//                   />
//                 </div>

//                 <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
//                   <Project data={projectData} />
//                   <Controls
//                     // currentProjectData={currentProjectData}
//                     // data={data}
//                     // transitionData={transitionData}
//                     // initData={initData}
//                     // handleData={setData}
//                     // handleTransitionData={setTransitionData}
//                     // handleCurrentProjectData={setcurrentProjectData}
//                     // projectData={projectData}
//                     activeIndex={activeIndex}
//                     setActiveIndex={setActiveIndex}
//                     total={projectData.length}
//                   />
//                 </div>
//               </div>
//             </div>
//           </React.Fragment>
//         </AnimatePresence>
//       </main>
//     </>
//   );
// };

// export default Projects;
