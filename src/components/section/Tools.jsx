import React from "react";
import { MarqueeDemo } from "../magicui/Marquee";
const Tools = () => {
  return (
    <div className="tools mt-32">
      <h1
        className="text-4xl/snug font-bold mb-4"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-once="true"
      >
        Tools and tech stacks that I used
      </h1>
      <p
        className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        Here are some tools that I usually use to create websites.
      </p>

      <div className="mt-14">
        <MarqueeDemo />
      </div>
    </div>
  );
};

export default Tools;
