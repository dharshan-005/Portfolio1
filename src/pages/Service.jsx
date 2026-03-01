import { useEffect, useRef } from "react";
import gsap from "gsap";
// import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import card1 from "../assets/card-1.png";
import card2 from "../assets/card-2.png";
import card3 from "../assets/card-3.png";

export default function Service() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // 📱 MOBILE — show flipped cards (no scroll animation)
      mm.add("(max-width: 999px)", () => {
        gsap.set(".card", {
          rotationY: 180,
          rotationZ: 0,
          y: 0,
          x: 0,
          clearProps: "scale",
        });

        gsap.set(".sticky-header h1", {
          opacity: 1,
          y: 0,
        });
      });

      // 💻 DESKTOP — full animation
      mm.add("(min-width: 1000px)", () => {
        const cardContainer =
          gsap.utils.selector(containerRef)(".card-container");
        const stickyHeader =
          gsap.utils.selector(containerRef)(".sticky-header h1");

        ScrollTrigger.create({
          trigger: ".stickies",
          start: "top top",
          end: `+=${window.innerHeight * 4}px`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            const p = self.progress;

            // Header
            if (p >= 0.1 && p <= 0.25) {
              const hp = gsap.utils.mapRange(0.1, 0.25, 0, 1, p);
              gsap.set(stickyHeader, {
                y: gsap.utils.mapRange(0, 1, 40, 0, hp),
                opacity: hp,
              });
            } else if (p < 0.1) {
              gsap.set(stickyHeader, { y: 40, opacity: 0 });
            } else {
              gsap.set(stickyHeader, { y: 0, opacity: 1 });
            }

            // Width
            gsap.set(cardContainer, {
              width:
                p <= 0.25
                  ? `${gsap.utils.mapRange(0, 0.25, 75, 60, p)}%`
                  : "60%",
            });

            // Gap + radius
            if (p >= 0.25 && p <= 0.45) {
              const gp = gsap.utils.mapRange(0.25, 0.45, 0, 1, p);
              gsap.set(cardContainer, { gap: `${20 * gp}px` });
              gsap.set(".card", { borderRadius: `${20 * gp}px` });
            } else if (p < 0.25) {
              gsap.set(cardContainer, { gap: 0 });
              gsap.set(".card", { borderRadius: 0 });
            } else {
              gsap.set(cardContainer, { gap: "20px" });
              gsap.set(".card", { borderRadius: "20px" });
            }

            // Flip
            if (p >= 0.65 && p <= 0.9) {
              const fp = gsap.utils.mapRange(0.65, 0.9, 0, 1, p);
              gsap.set(".card", { rotationY: 180 * fp });
              gsap.set(["#card-1", "#card-3"], {
                y: 30 * fp,
                rotationZ: (i) => [-15, 15][i] * fp,
              });
            }

            if (p < 0.65) {
              gsap.set(".card", { rotationY: 0 });
              gsap.set(["#card-1", "#card-3"], { y: 0, rotationZ: 0 });
            }

            if (p > 0.9) {
              gsap.set(".card", { rotationY: 180 });
              gsap.set(["#card-1", "#card-3"], {
                y: 30,
                rotationZ: (i) => [-15, 15][i],
              });
            }
          },
        });
      });
    }, containerRef);

    return () => ctx.revert(); // 🔥 cleans only this component
  }, []);
  // useEffect(() => {
  //   if (!containerRef.current) return;

  //   gsap.registerPlugin(ScrollTrigger);

  //   // const lenis = new Lenis({ smoothWheel: true });
  //   // lenis.on("scroll", ScrollTrigger.update);

  //   // gsap.ticker.add((time) => {
  //   //   lenis.raf(time * 1000);
  //   // });

  //   // gsap.ticker.lagSmoothing(0);

  //   const cardContainer = document.querySelector(".card-container");
  //   const stickyHeader = document.querySelector(".sticky-header h1");

  //   const initAnimations = () => {
  //     // ScrollTrigger.getAll().forEach((t) => t.kill());
  //     const mm = gsap.matchMedia();

  //     // Mobile: disable
  //     // mm.add("(max-width: 999px)", () => {
  //     //   document
  //     //     .querySelectorAll(".card, .card-container, .sticky-header h1")
  //     //     .forEach((el) => (el.style.cssText = ""));
  //     // });

  //     // Desktop
  //     mm.add("(min-width: 1000px)", () => {
  //       ScrollTrigger.create({
  //         trigger: ".sticky",
  //         start: "top top",
  //         end: `+=${window.innerHeight * 4}px`,
  //         scrub: 1,
  //         pin: true,
  //         pinSpacing: true,
  //         onUpdate: (self) => {
  //           const p = self.progress;

  //           // Header
  //           if (p >= 0.1 && p <= 0.25) {
  //             const hp = gsap.utils.mapRange(0.1, 0.25, 0, 1, p);
  //             gsap.set(stickyHeader, {
  //               y: gsap.utils.mapRange(0, 1, 40, 0, hp),
  //               opacity: hp,
  //             });
  //           } else if (p < 0.1) {
  //             gsap.set(stickyHeader, { y: 40, opacity: 0 });
  //           } else {
  //             gsap.set(stickyHeader, { y: 0, opacity: 1 });
  //           }

  //           // Width
  //           gsap.set(cardContainer, {
  //             width:
  //               p <= 0.25
  //                 ? `${gsap.utils.mapRange(0, 0.25, 75, 60, p)}%`
  //                 : "60%",
  //           });

  //           // Gap + radius
  //           if (p >= 0.25 && p <= 0.45) {
  //             const gp = gsap.utils.mapRange(0.25, 0.45, 0, 1, p);
  //             gsap.set(cardContainer, { gap: `${20 * gp}px` });
  //             gsap.set(".card", { borderRadius: `${20 * gp}px` });
  //           } else if (p < 0.25) {
  //             gsap.set(cardContainer, { gap: 0 });
  //             gsap.set(".card", { borderRadius: 0 });
  //           } else {
  //             gsap.set(cardContainer, { gap: "20px" });
  //             gsap.set(".card", { borderRadius: "20px" });
  //           }

  //           // Flip
  //           if (p >= 0.65 && p <= 0.9) {
  //             const fp = gsap.utils.mapRange(0.65, 0.9, 0, 1, p);
  //             gsap.set(".card", { rotationY: 180 * fp });
  //             gsap.set(["#card-1", "#card-3"], {
  //               y: 30 * fp,
  //               rotationZ: (i) => [-15, 15][i] * fp,
  //             });
  //           }

  //           if (p < 0.65) {
  //             gsap.set(".card", { rotationY: 0 });
  //             gsap.set(["#card-1", "#card-3"], { y: 0, rotationZ: 0 });
  //           }

  //           if (p > 0.9) {
  //             gsap.set(".card", { rotationY: 180 });
  //             gsap.set(["#card-1", "#card-3"], {
  //               y: 30,
  //               rotationZ: (i) => [-15, 15][i],
  //             });
  //           }
  //         },
  //       });
  //     });
  //   };

  //   initAnimations();
  //   window.addEventListener("resize", initAnimations);

  //   return () => {
  //     window.removeEventListener("resize", initAnimations);
  //     // ScrollTrigger.getAll().forEach((t) => t.kill());
  //     // lenis.destroy();
  //   };
  // }, []);

  return (
    <main ref={containerRef} className="font-['Instrument_Serif']">
      <section
        // ref={sectionRef}
        className="stickies h-svh flex items-center justify-center px-8 max-lg:h-auto max-lg:py-16"
      >
        <div className="sticky-header hidden md:block absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:relative max-lg:transform-none max-lg:mb-16">
          <h1 className="text-[4rem] opacity-0 translate-y-10 text-center max-lg:opacity-100 max-lg:text-3xl">
            What am I good at?
          </h1>
        </div>

        <div className="card-container w-[75%] flex perspective-[1000px] translate-y-10 max-lg:w-full max-lg:flex-col max-lg:gap-8 max-lg:[&_.card]:transform-y-0! max-lg:[&_.card]:rotate-0! max-lg:[&_.card]:transform-[rotateY(180deg)]">
          {[
            ["card-1", card1, "UI / UX Design", "bg-[#b2b2b2] text-[#fff]"],
            ["card-2", card2, "Photography", "bg-[#ce2017] text-[#fff]"],
            ["card-3", card3, "Web Development", "bg-[#2f2f2f] text-[#fff]"],
          ].map(([id, img, text, bg], i) => (
            <div
              key={id}
              id={id}
              className="card relative flex-1 aspect-5/7 transform-style-preserve-3d origin-top max-lg:flex-none max-lg:w-55 max-lg:h-80"
            >
              {/* Front */}
              <div className="absolute inset-0 backface-hidden overflow-hidden rounded-inherit">
                <img
                  src={img}
                  alt={text}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Back */}
              <div
                className={`absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center text-center p-8 rounded-[20px] ${bg}`}
              >
                <span className="absolute top-8 left-8 opacity-40">
                  ( {String(i + 1).padStart(2, "0")} )
                </span>
                <p className="text-2xl">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
