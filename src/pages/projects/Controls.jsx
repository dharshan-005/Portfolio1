import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Progress from "./Progress";

const Controls = ({ activeIndex, setActiveIndex, total }) => {
  const prev = () =>
    setActiveIndex((i) => (i - 1 + total) % total);

  const next = () =>
    setActiveIndex((i) => (i + 1) % total);

  return (
    <div className="flex items-center gap-4">
      <button onClick={prev}>
        <IoIosArrowBack />
      </button>

      <button onClick={next}>
        <IoIosArrowForward />
      </button>

      <Progress curIndex={activeIndex} length={total} />
    </div>
  );
};

export default Controls;


// import React from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import Progress from "./Progress";

// const Controls = ({ activeIndex, setActiveIndex, total }) => {
//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev - 1 + total) % total);
//   };

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev + 1) % total);
//   };

//   return (
//     <div className="flex items-center gap-3 px-0 py-3 md:px-1 md:py-5">
//       <SliderButton handleClick={handlePrev}>
//         <IoIosArrowBack className="text-xl" />
//       </SliderButton>

//       <SliderButton handleClick={handleNext}>
//         <IoIosArrowForward className="text-xl" />
//       </SliderButton>

//       <Progress curIndex={activeIndex} length={total} />
//     </div>
//   );
// };

// export default Controls;

// const SliderButton = ({ children, handleClick }) => {
//   return (
//     <button
//       onClick={handleClick}
//       className="flex h-14 w-14 items-center justify-center rounded-full border border-[#fdfdfd5f] transition hover:bg-white hover:text-black"
//     >
//       {children}
//     </button>
//   );
// };

// import React from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import Progress from "./Progress";

// const Controls = ({
//   projectData,
//   data,
//   transitionData,
//   currentProjectData,
//   handleData,
//   handleTransitionData,
//   handleCurrentProjectData,
//   initData,
// }) => {
//   const handlePrev = () => {
//     handleData((prevData) => [
//       transitionData ? transitionData : initData,
//       ...prevData.slice(0, prevData.length - 1),
//     ]);

//     handleCurrentProjectData({
//       data: transitionData ? transitionData : projectData[0],
//       index: projectData.findIndex(
//         (ele) => ele.img === data[data.length - 1].img
//       ),
//     });

//     handleTransitionData(data[data.length - 1]);
//   };

//   const handleNext = () => {
//     handleData((prev) => prev.slice(1));

//     handleCurrentProjectData({
//       data: transitionData ? transitionData : initData,
//       index: projectData.findIndex((ele) => ele.img === data[0].img),
//     });

//     handleTransitionData(data[0]);

//     setTimeout(() => {
//       handleData((newData) => [
//         ...newData,
//         transitionData ? transitionData : initData,
//       ]);
//     }, 500);
//   };

//   return (
//     <div className="flex items-center gap-3 px-0 py-3 md:px-1 md:py-5">
//       <SliderButton handleClick={handlePrev}>
//         <IoIosArrowBack className="text-xl" />
//       </SliderButton>

//       <SliderButton handleClick={handleNext}>
//         <IoIosArrowForward className="text-xl" />
//       </SliderButton>

//       <Progress
//         curIndex={currentProjectData.index}
//         length={projectData.length}
//       />
//     </div>
//   );
// };

// export default Controls;

// const SliderButton = ({ children, handleClick }) => {
//   return (
//     <button
//       onClick={handleClick}
//       className="flex h-14 w-14 items-center justify-center rounded-full border border-[#fdfdfd5f] transition ease-in-out hover:bg-white hover:text-black"
//     >
//       {children}
//     </button>
//   );
// };
