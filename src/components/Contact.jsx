import React from "react";

import {
  ChakraProvider,
  HStack,
  Box,
  Link,
  Text,
  Button,
} from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <Box id="Contact" margin={{ base: 0, md: 10 }} pr={20} pl={20}>
      <Text className="text-center font-bold text-lg">
        Want to chat?
        <br />
        <Link href="mailto:pingyujc@gmail.com">
          <Button className="item-center">Let's Connect!</Button>
        </Link>
      </Text>
    </Box>
  );
};

export default Contact;
