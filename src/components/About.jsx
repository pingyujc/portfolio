import React from "react";
import { ChakraProvider, useColorMode, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import only the required icons
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

const About = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="w-full flex items-center justify-center flex-col text-center mt-[80px]">
      <p className="text-[#182550]">Hi, my name is</p>
      <h1 className="text-3xl sm:text-5xl font-bold text-[#182550]">
        JONATHAN CHEN
      </h1>
      <h2 className="mb-4">
        A CS student at the University of California, Santa Barbara
      </h2>

      {/* Social Icons */}
      <HStack>
        <a href="https://www.linkedin.com/in/-jonathanchen/">
          <FaLinkedin size={30} />
        </a>

        <a href="https://github.com/pingyujc">
          <FaGithub size={30} />
        </a>
        <a href="https://twitter.com/pingyujc">
          <FaTwitter size={30} />
        </a>
        <a href="mailto:pingyujc@gmail.com">
          <HiOutlineMail size={30} />
        </a>

        <a href="Resume.pdf">
          <BsFillPersonLinesFill size={30} />
        </a>
      </HStack>

      {/* More about me */}
      <div className="mt-10 text-center">
        <p className=" inline-block">
          More about me...
          <br />
          I am a blockchain enthusiast who has explored the crypto world for
          more than 2 years.
          <br />I am currently a computer science student at UCSB, looking
          forward to bringing my technical skills to your needs!
        </p>
      </div>
    </div>
  );
};

export default About;
