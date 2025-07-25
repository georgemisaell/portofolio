import React from "react";
import { listProyek } from "../../data";

const Project = () => {
  return (
    <div className="project mt-32 py-10" id="project">
      <h2
        className="text-center text-4xl font-bold "
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        Project
      </h2>
      <p
        className="text-base/loose text-center opacity-50"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        A small selection of my projects
      </p>
      <div
        className="project-box mt-14 grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
      >
        {listProyek.map((project) => (
          <div
            key={project.id}
            className="p-4 bg-zinc-800 rounded-md"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={project.dad}
            data-aos-once="true"
          >
            <img src={project.gambar} alt="Project Image" loading="lazy" />
            <div>
              <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
              <p className="text-base/loose mb-4">{project.desk}</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <p
                    className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                    key={index}
                  >
                    {tool}
                  </p>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a
                  href="#"
                  className="bg-violet-700 p-3 rounded-lg block border-zinc-600 hover:bg-violet-600"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
