import "./App.css";
import {
  ChakraProvider,
  useColorMode,
  IconButton,
  Icon,
} from "@chakra-ui/react";
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
      <br />
      <br />
      <About />
      <br />
      {/* <Projects /> */}
      <br />
      {/* <Skills /> */}
      <br />
      <Contact />
    </div>
  );
}

export default App;
