import React from "react";
import { Button, Center, Flex, Icon, Img, Spacer } from "@chakra-ui/react";
import { IoRocketSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    <Flex shadow="base" padding="10px" bg='white'>
      <Center>
        <Img
          w="35px"
          src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75"
          alt="Logo"
        />
      </Center>
      <Spacer />
      <Flex width="320px" fontSize="16px">
        <Button
          fontWeight="normal"
          color="grey"
          variant="gost"
          _hover={{ bg: "color.brand101" }}
        >
          Sign In
        </Button>
        <Spacer />

        <Button
          fontWeight="normal"
          variant="outline"
          border="1px solid"
          borderColor="color.brand"
        >
          Sign Up
        </Button>
        <Spacer />

        <Button
          variant="solid"
          color="white"
          bgGradient="linear(to-tr, purple.500, blue.500)"
        >
          Post a Job{" "}
          <Icon marginLeft="5px" fontSize="20px">
            <IoRocketSharp />
          </Icon>
        </Button>
      </Flex>
    </Flex>
  );
};
export default Navbar;
