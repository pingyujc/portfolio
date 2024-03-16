import React from "react";
import {
    ChakraProvider,
    useColorMode,
    HStack,
    Box,
    Link,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const About = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const textColor =
        colorMode === "light" ? "text-[#182550]" : "text-[#E7F1FF]";

    return (
        // <Box className="w-full flex items-center justify-center flex-col text-center mt-[80px] ">
        <Box id="About" margin={{ base: 0, md: 10 }} pr={20} pl={20}>
            <Box className="w-full flex items-center justify-center flex-col text-center ">
                <p className={` text-left ${textColor}`}>Hi, my name is</p>
                <h1
                    className={`text-4xl sm:text-5xl font-bold ${textColor} text-left`}
                >
                    JONATHAN CHEN
                </h1>

                <h2 className="mb-4 text-left">
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
            </Box>

            {/* More about me */}
            <div className="mt-10 text-left">
                <p className=" inline-block">
                    <span className="font-bold text-lg">
                        {" "}
                        More about me...{" "}
                    </span>
                    <br />
                    <br />
                    Currently a senior CS student at UC Santa Barbar with strong
                    passion in learning new technogies and coding.
                    <br />
                    I have experience coding regarding databases, APIs, and
                    algorithms.
                    <br />
                    <br />
                    I am also a blockchain enthusiast who has explored the Web3
                    world for more than 3 years.
                    <br />
                    Previously interned at
                    <Link
                        href="https://lootex.io/"
                        isExternal
                        color={"blue.600"}
                    >
                        {" "}
                        Lootex{" "}
                    </Link>
                    and
                    <Link
                        href="https://xy.finance/"
                        isExternal
                        color={"blue.600"}
                    >
                        {" "}
                        XY Finance
                    </Link>
                    , now running
                    <Link
                        href="https://chaingem.beehiiv.com/subscribe/"
                        isExternal
                        color={"blue.600"}
                    >
                        {" "}
                        ChainGem{" "}
                    </Link>
                    and leading research team at
                    <Link
                        href="https://blockchainucsb.com/"
                        isExternal
                        color={"blue.600"}
                    >
                        {" "}
                        Blockchain UCSB.
                    </Link>{" "}
                    <br />
                    <br />
                    Lately, I've been focusing on trading algorithms, blockchain
                    applications, and just building cool stuff.
                </p>
            </div>
        </Box>
    );
};

export default About;
