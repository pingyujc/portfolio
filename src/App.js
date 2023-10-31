import "./App.css";
import Navbar from "./components/Navbar";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      hello
      <div width={"full"}>
        <PhoneIcon />
        <AddIcon boxSize={6} />
        <WarningIcon w={8} h={8} color="red.500" />
      </div>
    </div>
  );
}

export default App;
