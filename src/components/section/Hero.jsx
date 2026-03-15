import DataImage from "../../data";
import TypeIt from "typeit-react";
import { Astronaut } from "../Astronaut.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 835 });

  /* Canvas */
  const AstronautCanvas = (
    <div className="w-full h-[400px] md:h-[600px] relative">
      <Canvas
        camera={{ position: [0, 1, 3] }}
        className={`h-[300px] md:h-[500px] ${isMobile ? "mb-6" : "order-2 md:order-1"}`}
      >
        <Astronaut position={[0, -1, -0.5]} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );

  return (
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      {!isMobile && <div className="order-2 md:order-1">{AstronautCanvas}</div>}
      {/* Text */}
      <div className="animate__animated animate__fadeInUp order-1 md:order-2">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-10 rounded-md"
            loading="lazy"
          />
          <q>Beautiful code, born from perseverance</q>
        </div>

        {isMobile && AstronautCanvas}

        <h1 className="text-5xl/tight font-bold mb-6">
          <TypeIt>Hi, I'm George Misael</TypeIt>
        </h1>
        <p className="text-base/loose mb-6 opacity-50">
          As a D4 Informatics Engineering student at Universitas Airlangga, I
          specialize in transforming complex digital challenges into elegant,
          user-centered full-stack solutions. My expertise spans both frontend
          and backend technologies, enabling me to craft seamless digital
          experiences that bridge innovation with practical business needs.
        </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a
            href="/public/CV- George Misael Gantume-resume-2.pdf"
            target="_blank"
            className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
          >
            Downlaod CV <i className="ri-download-line ri-lg"></i>
          </a>
          <a
            href="#project"
            className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
          >
            My Project <i className="ri-arrow-down-line ri-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
