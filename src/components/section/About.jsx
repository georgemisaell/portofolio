import DataImage from "../../data";
import React from "react";

const About = () => {
  return (
    <div className="about mt-32 py-10" id="about">
      <div
        className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <img
          src={DataImage.HeroImage}
          alt="Image"
          className="w-12 rounded-md mb-10 sm:hidden"
          loading="lazy"
        />
        <p className="text-base/loose mb-10">
          Hello, I'm George Misael Gantume, a dedicated Fullstack Developer. My
          philosophy is that design aesthetics and robust functionality must be
          seamlessly integrated. This approach ensures every solution I build
          not only captures attention but also is highly effective in
          facilitating user interaction.
        </p>
        <div className="flex items-center justify-between">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md sm:block hidden"
            loading="lazy"
          />
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                11 <span className="text-violet-500">+</span>
              </h1>
              <p>Project Completed</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                2 <span className="text-violet-500">+</span>
              </h1>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
