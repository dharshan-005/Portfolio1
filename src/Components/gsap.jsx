import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GsapAnimate = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".c", {
      scrollTrigger: {
        trigger: ".c",
        toggleActions: "restart none none none",
      },
      x: 400,
      rotation: 360,
      duration: 5,
    });
  }, []);

  return (
    <>
      <div className="a w-52 h-52 bg-amber-50">a</div>
      <div className="b w-52 h-52 bg-amber-300">b</div>
      <div className="c w-52 h-52 bg-amber-600">c</div>
    </>
  );
};

export default GsapAnimate;