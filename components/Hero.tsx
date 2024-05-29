import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-10 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-10 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="orange"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="orange" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          // change the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Hello, tech world!
          </p>
           <div className="flex md:flex-row flex-col gap-10 w-full mt-10 mb-5">
            <div className="md:w-1/2">
          <TextGenerateEffect 
            words="Crafting Intuitive and Engaging Digital Interfaces"
            className="text-orange text-center text-[30px] md:text-3xl lg:text-4xl"
          />
          </div>
          <div className="flex flex-col justify-center items-center md:w-1/2  bg-opacity-45 px-4 rounded-lg py-3  ">
          <p className="   text-lg ">
            Welcome to my portfolio. I am Deepak, a passionate and dedicated Frontend Developer with a knack for creating dynamic and user-friendly web applications.
             With a strong foundation in modern web technologies and a keen eye for detail.
          </p>

          </div>
          </div>
          <a href="#about">
            <MagicButton
              title="Checkout my works"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
