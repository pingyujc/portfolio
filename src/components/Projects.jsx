import React from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import FT_Bot from "../assets/FT_bot.png";
import { FaLink, FaGithub, FaGithubSquare } from "react-icons/fa";

const buttonLikeBoxStyle = {
  display: "inline-block",
  px: 3,
  py: 1,
  borderRadius: "md",
  bg: "gray.200",
  color: "gray.800",
  mr: 2,
  userSelect: "none",
  cursor: "default",
};
const Projects = () => {
  return (
    <Box id="Projects" margin={{ base: 0, md: 10 }} pr={20} pl={20}>
      <Text fontSize="lg" mb={4} fontWeight="bold">
        Projects
      </Text>
      <Flex flexWrap="wrap">
        {/* FriendTech bot */}
        <Box
          width={"100%"}
          mb={8}
          display="flex" // Use flex display to control alignment
          flexDirection={{ base: "column", md: "row" }} // Stack on small screens, side-by-side on medium screens
          alignItems={{ base: "flex-start", md: "center" }} // Align items at the start (top) on small screens, center on medium screens
        >
          {/* Text content */}
          <Box width={{ base: "100%", md: "50%" }} pr={{ base: 0, md: 4 }}>
            <Flex align="center">
              <Text fontWeight="bold" mr={2}>
                FriendTech Trading Signal Bot
              </Text>
              {/* Add icons here */}
              {/* <FaLink /> */}
              <a
                href="https://github.com/pingyujc/FT_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare />
              </a>
            </Flex>
            <Text mb={4}>
              Used python and various APIs to track the transactions on the Base
              blockchain.
              <br />
              After filtering out the needed information, the bot will
              automatically capture the buying and selling signal of 'whales'
              and send it to the telegram chat.
            </Text>
            <Box mt={2}>
              {/* For the tech stack */}
              <Flex>
                <Box {...buttonLikeBoxStyle}>Python</Box>
                <Box {...buttonLikeBoxStyle}>API</Box>
                <Box {...buttonLikeBoxStyle}>Telegram</Box>
                <Box {...buttonLikeBoxStyle}>Etherscan</Box>
              </Flex>
            </Box>
          </Box>
          {/* Space between text and image */}
          <Box width={{ base: "100%", md: "4%" }} />
          {/* Image */}
          <Box width={{ base: "100%", md: "46%" }}>
            <Image
              src={FT_Bot} // Replace with the actual path to your image
              alt="FrienTech Bot"
              mb={4}
              borderRadius="md"
            />
          </Box>
        </Box>
        {/* Job Board */}
        <Box
          width={"100%"}
          mb={8}
          display="flex" // Use flex display to control alignment
          flexDirection={{ base: "column", md: "row" }} // Stack on small screens, side-by-side on medium screens
          alignItems={{ base: "flex-start", md: "center" }} // Align items at the start (top) on small screens, center on medium screens
        >
          {/* Text content */}
          <Box width={{ base: "100%", md: "50%" }} pr={{ base: 0, md: 4 }}>
            <Flex align="center">
              <Text fontWeight="bold" mr={2}>
                BZD Job Board
              </Text>
              {/* Add icons here */}
              {/* <FaLink /> */}
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare />
              </a>
            </Flex>
            <Text mb={4}>
              A job board built for entry level and internships opportunities
              within the Web3 space.
            </Text>
            {/* For the tech stack */}
            <Flex>
              <Box {...buttonLikeBoxStyle}>React</Box>
              <Box {...buttonLikeBoxStyle}>MySQL</Box>
              <Box {...buttonLikeBoxStyle}>Python</Box>
              <Box {...buttonLikeBoxStyle}>Javascript</Box>
            </Flex>
          </Box>
          {/* Space between text and image */}
          <Box width={{ base: "100%", md: "4%" }} />
          {/* Image */}
          <Box width={{ base: "100%", md: "46%" }}>
            <Image
              src="" // Replace with the actual path to your image
              alt="BZD Job Board"
              mb={4}
              borderRadius="md"
            />
          </Box>
        </Box>
        {/* StarsRus DB project from cs174a */}
        <Box
          width={"100%"}
          mb={8}
          display="flex" // Use flex display to control alignment
          flexDirection={{ base: "column", md: "row" }} // Stack on small screens, side-by-side on medium screens
          alignItems={{ base: "flex-start", md: "center" }} // Align items at the start (top) on small screens, center on medium screens
        >
          {/* Text content */}
          <Box width={{ base: "100%", md: "50%" }} pr={{ base: 0, md: 4 }}>
            <Flex align="center">
              <Text fontWeight="bold" mr={2}>
                StarsRus
              </Text>
              {/* Add icons here */}
              {/* <FaLink /> */}
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare />
              </a>
            </Flex>
            <Text mb={4}>
              A software system built on top on autonomus databases for stock
              brokerage.
              <br />
              The system provides function like maintaining information,
              generating reports, and processing transactions.
            </Text>
            {/* For the tech stack */}
            <Flex>
              <Box {...buttonLikeBoxStyle}>Java</Box>
              <Box {...buttonLikeBoxStyle}>JDBS</Box>
              <Box {...buttonLikeBoxStyle}>SQL</Box>
              <Box {...buttonLikeBoxStyle}>Oracle Cloud</Box>
            </Flex>
          </Box>
          {/* Space between text and image */}
          <Box width={{ base: "100%", md: "4%" }} />
          {/* Image */}
          <Box width={{ base: "100%", md: "46%" }}>
            <Image
              src="" // Replace with the actual path to your image
              alt="StarsRus"
              mb={4}
              borderRadius="md"
            />
          </Box>
        </Box>
        {/* CS156 project */}
        <Box
          width={"100%"}
          mb={8}
          display="flex" // Use flex display to control alignment
          flexDirection={{ base: "column", md: "row" }} // Stack on small screens, side-by-side on medium screens
          alignItems={{ base: "flex-start", md: "center" }} // Align items at the start (top) on small screens, center on medium screens
        >
          {/* Text content */}
          <Box width={{ base: "100%", md: "50%" }} pr={{ base: 0, md: 4 }}>
            <Flex align="center">
              <Text fontWeight="bold" mr={2}>
                Legacy Project
              </Text>
              {/* Add icons here */}
              {/* <FaLink /> */}
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare />
              </a>
            </Flex>
            <Text mb={4}>
              Description of Project 1 goes here. You can provide more details
              about the project.
            </Text>
            {/* For the tech stack */}
            <Flex>
              <Box {...buttonLikeBoxStyle}>React</Box>
              <Box {...buttonLikeBoxStyle}>Javascript</Box>
              <Box {...buttonLikeBoxStyle}>Java</Box>
              <Box {...buttonLikeBoxStyle}>Spring-Boot</Box>
            </Flex>
          </Box>
          {/* Space between text and image */}
          <Box width={{ base: "100%", md: "4%" }} />
          {/* Image */}
          <Box width={{ base: "100%", md: "46%" }}>
            <Image
              src="" // Replace with the actual path to your image
              alt="Legacy Code"
              mb={4}
              borderRadius="md"
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Projects;
