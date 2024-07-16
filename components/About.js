import React from "react";
import AboutImg from "../assets/about_image.jpg";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-10" id="about">
      <div className="flex mx-auto w-[90%] flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="about-info flex-auto w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2 ">
            About Me
          </h2>

          <div class="text-center md:text-right  pr-8">
            <p className="pb-5 text-base ">
              I'm Masha Pitumpe, a passionate final-year undergraduate at the
              Faculty of Engineering, University of Ruhuna, specializing in
              Electrical and Information Engineering.
            </p>
            <p className="pb-5 text-base">
              With a strong foundation in programming and problem-solving, I am
              proficient in languages such as C, C++, Python, and JavaScript. My
              expertise extends to web development, where I have hands-on
              experience with the MERN stack, Tailwind CSS, and the .NET
              framework. I enjoy crafting seamless and dynamic web experiences.
            </p>

            <p className="pb-5 text-base">
              My interests include web development, cloud computing, DevOps, and
              cybersecurity. During my previous internship, I developed programs
              for IoT devices using Python, managed and deployed applications on
              AWS cloud infrastructure, and designed web applications using
              React and Node.js. Additionally, I have implemented secure IoT
              systems using Zero Trust Architecture principles to enhance
              network security.
            </p>

            <p className="text-base">
              Currently, I am practicing cloud computing and exploring the vast
              potential and possibilities it presents. The realm of technology
              offers limitless opportunities to create, innovate, and make a
              meaningful impact. I am excited about the future and the
              possibilities it holds, and I am driven to be a part of shaping it
              through my dedication and expertise in software engineering.
            </p>
          </div>
        </div>

        <div className="about-img flex-auto w-full md:w-1/3  flex items-center justify-center pt-16">
          <img src={AboutImg} alt="coding illustration" className="px-0 " />
        </div>
      </div>
    </section>
  );
};

export default About;
