import React from "react";
import cssProjects from "../assets/project-1.jpg";
import devlog from "../assets/project-1.jpg";
import pizzaden1 from "../assets/pizzaden1.jpg";
import musiclib1 from "../assets/musiclib1.jpg";
import getInspirred from "../assets/project-1.jpg";
import uilogs from "../assets/project-1.jpg";
import { useNavigate, Link } from "react-router-dom";

const Projects = () => {
  let navigate = useNavigate();
  const routeChange = (path) => {
    console.log("hiiii");
    navigate(path);
  };

  const projects = [
    {
      img: pizzaden1,
      title: "Pizza Ordering Application",
      page: "/project_pizzaden",
      desc: "An online food ordering system for Pizza Den, allowing customers to browse the menu, place orders, and track deliveries in real-time. Built using React and Tailwind CSS for the frontend, Node.js for the backend, and MongoDB for data management.",
      live: "https://pizzaden.lk",
      code: "https://github.com/Thil4n/pizza-den.git",
    },
    {
      img: musiclib1,
      title: "Online Music Library",
      page: "/project_music",
      desc: "A comprehensive music library website enabling users to create accounts, log in using Google authentication, add songs, and listen to them. Built with React and Tailwind CSS for the UI, and MongoDB, Firebase, and Redux for the backend.",
      live: "https://uilogs.xyz/",
      code: "https://github.com/Coderamrin/html-templates",
    },
    {
      img: cssProjects,
      title: "css projects",
      page: "/project_pizzaden",
      desc: "Frontend Mentor challange directory, solved with vanilla CSS",
      live: "https://build-10-css-projects.netlify.app/",
      code: "https://github.com/Coderamrin/build-10-css-projects",
    },
  ];

  return (
    <section className="bg-secondery text-white  px-5 py-10" id="projects">
      <div className="container mx-auto w-[90%] grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5 w-[70%]">
          <h2 className="text-3xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5 text-base">
            These are some of my best projects. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects w-[90%] container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div
              class="block  rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-102  duration-300 ..."
              key={i}
            >
              <div
                class="relative overflow-hidden bg-cover bg-no-repeat"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                <div className="rounded-t-lg overflow-hidden w-30 h-64">
                  <img
                    className="w-full h-full object-cover"
                    src={project.img}
                    alt=""
                  />
                </div>
                <a href="#!">
                  <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
              <div class="p-6 text-surface dark:text-black">
                <h5 class="mb-2 text-xl font-medium leading-tight">
                  {project.title}
                </h5>
                <p class="mb-4 text-base">{project.desc}</p>
                <button
                  type="button"
                  class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  onClick={() => routeChange(project.page)}
                >
                  Button
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
