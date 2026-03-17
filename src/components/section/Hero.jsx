import DataImage from "../../data";
import TypeIt from "typeit-react";
import { Astronaut } from "../Astronaut.jsx";
import { FlipWord } from "../aceternity/FlipWord";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Meteors } from "../ui/Meteors";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 835 });

  /* Canvas */
  const AstronautCanvas = (
    <div className="relative h-[400px] w-full overflow-hidden md:h-[600px]">
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
    <div className="hero relative grid grid-cols-1 items-center gap-6 overflow-hidden md:grid-cols-2 xl:gap-0">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Meteors />
      </div>
      {!isMobile && (
        <div className="order-2 md:order-1 relative z-10">
          {AstronautCanvas}
        </div>
      )}
      {/* Text */}
      <div className="animate__animated animate__fadeInUp order-1 relative z-10 md:order-2">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-10 rounded-md"
            loading="lazy"
          />
          <p>
            Shoot for the <b>moon</b>. Even if you miss, you’ll land among the <b>stars</b>.
          </p>
        </div>

        {isMobile && AstronautCanvas}

        {/* <h1 className="text-5xl/tight font-bold mb-6">
          <TypeIt>Hi, I'm George Misael</TypeIt>
        </h1> */}

        <div className="text-5xl/tight mb-6">
          <FlipWord />
        </div>
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
