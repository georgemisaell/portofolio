import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Tools from "./components/section/Tools";
import Project from "./components/section/Project";
import ClickSpark from "../src/components/reactbits/ClickSpark";
import SplashCursor from "./components/reactbits/SplashCursor";

function App() {
  return (
    <>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Tools Section*/}
        <Tools />

        {/* Project Section */}
        <Project />
        <SplashCursor />
      </ClickSpark>
    </>
  );
}

export default App;
