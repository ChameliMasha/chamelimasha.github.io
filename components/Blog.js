import React from "react";

const Blog = () => {
  const post = [
    {
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--AuZFJnr6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a8okx5rxzuh5fojibsy3.png",
      title: "How to build a counter app with JavaScript",
      url: "https://dev.to/coderamrin/how-to-build-a-counter-app-with-javascript-439p",
    },
    {
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--FsJZ6lhI--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gv7y2de8kalk9l0820ag.jpg",
      title: "JavaScript Ultimate Guide 02: The DOM",
      url: "https://dev.to/coderamrin/javascript-ultimate-guide-02-the-dom-3ho9",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-10" id="blog">
      <div className="container w-[90%] mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-3xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">
            Blogs
          </h2>

          <p className="pb-5 text-base">Some of my best blogs.</p>
        </div>

        <div></div>
      </div>

      <div className="projects w-[90%] container mx-auto grid md:grid-cols-2 gap-10 text-base">
        {post.map((item) => {
          return (
            <div>
              <img src={item.img} alt={item.title} />
              <h3 className="py-5 text-base">{item.title}</h3>
              <a href="#projects" className="inline-block">
                <button
                  type="submit"
                  class="py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-600 sm:w-fit hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Read More
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
