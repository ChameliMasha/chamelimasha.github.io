import React from "react";
import HeroImg from "../assets/Hero-image.jpg";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Hero = () => {


  return (
    <section className="bg-primary px-20 text-white py-16 ">
      <div className="container w-[90%] mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl ">
            Hi there, <br />I am <span className="text-accent">M</span>asha{" "}
            <span className="text-accent">P</span>itumpe
            {/* <br />
            Engineering Undergraduate
            <br /> */}
          </h1>

          <p className="py-5 text-sm md:text-base">
            An Engineering Undergraduate skilled in JavaScript, React.js, C++,
            and Python, with a passion for Web Development, DevOps, and
            Cybersecurity
          </p>
          <div className="flex justify-center md:justify-start py-5">
            <a
              href="http://www.linkedin.com/in/masha-pitumpe-b1071b213"
              className="pr-4 inline-block text-accent hover:text-indigo-800"
            >
              {" "}
              <AiOutlineLinkedin size={30} />{" "}
            </a>
            <a
              href="https://github.com/ChameliMasha"
              className="pr-4 inline-block text-accent hover:text-indigo-800"
            >
              {" "}
              <AiOutlineGithub size={30} />{" "}
            </a>
            <a
              href="https://www.facebook.com/masha.pitumpe/"
              className="pr-4 inline-block text-accent hover:text-indigo-800"
            >
              {" "}
              <AiOutlineFacebook size={30} />{" "}
            </a>
          </div>
          <a href="#projects" className="inline-block">
            <button
              type="submit"
              className="py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-600 sm:w-fit hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              See Projects
            </button>
          </a>
        </div>

        <div className="hero-img flex justify-center md:justify-center items-center">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="mt-6 "
            style={{ width: "300px", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
