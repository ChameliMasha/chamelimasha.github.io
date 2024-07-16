import React from "react";

const Technologies = () => {
  const technologies = [
    "C",
    "C++",
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "React",
    "Node js",
    ".NET",
    "MongoDB",
    "MySQL",
    "Cassandra",
    "MariaDB",
    "Linux",
    "Git",
    "Canva",
    "Figma",
    "postman",
    "Cisco Packet Tracer",
    "Proteus Stimulation",
  ];

  return (
    <section className="bg-primary text-white px-5 py-10" id="blog">
      <div className="container w-[90%] mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <h2 className="text-3xl font-bold mb-5 border-b-[5px] w-[300px] border-indigo-600 pb-2">
          Technical Skills
        </h2>
      </div>
      <div className="tech-skills mb-5 w-[80%] mx-auto flex justify-center">
        <div className="flex flex-wrap gap-4">
          {technologies.map((item, index) => (
            <div
              key={index}
              className="border-2 w-auto border-indigo-600 p-6 rounded-md hover:border-indigo-200 hover:text-white transition-colors duration-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
