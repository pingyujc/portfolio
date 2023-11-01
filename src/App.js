import "./App.css";
import {
  ChakraProvider,
  useColorMode,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import About from "./components/About";

import theme from "./theme.js"; // Import your custom Chakra UI theme

function App() {
  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <About />
    </div>
  );
}

export default App;
