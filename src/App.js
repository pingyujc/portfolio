import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import theme from "./theme.js"; // Import your custom Chakra UI theme
import Skills from "./components/Skills";

function App() {
  return (
    <div className="">
      <Navbar />
      {/* create some space between nav bar and the rest of content */}
      <Box height={"100px"}> space</Box>
      <br />
      <About />
      <br />
      <Projects />

      <br />
      {/* <Skills /> */}
      <br />
      <Contact />
    </div>
  );
}

export default App;
