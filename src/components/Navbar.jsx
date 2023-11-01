import React, { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import Logo from "../assets/JC_logo.png";
import { Link } from "react-scroll";
import { useColorMode, IconButton, HStack } from "@chakra-ui/react"; // Import useColorMode from Chakra UI

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  // Use the useColorMode hook from Chakra UI
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div
      className={`fixed w-full h-[80px] flex justify-between items-center px-4 ${
        colorMode === "light" ? "bg-[#e2e1e1] text-black" : "bg-[#0a192f]"
      } text-gray-300`}
    >
      {/* <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300"> */}
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>

      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        size="sm"
        variant="ghost"
      />
    </div>
  );
};

export default Navbar;
