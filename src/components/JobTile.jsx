import {
  Box,
  Flex,
  Heading,
  Icon,
  Img,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FcGlobe } from "react-icons/fc";
import { IoBookmark } from "react-icons/io5";
import { BsPinAngleFill } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";

const JobTile = ({
  id,
  title,
  logo,
  company,
  role,
  type,
  isRemote,
  bookmark,
}) => {
  return (
    <Flex
      border={(id === 1) | (id === 2) | (id === 3) && "2px solid purple"}
      bg="white"
      padding="15px"
      borderRadius="10px"
      shadow="base"
      margin="15px"
      _hover={{ shadow: "xl" }}
    >
      <Box>
        <Img width="25px" src={logo} />
      </Box>

      <Box marginLeft="15px">
        <Text>{company}</Text>
        <Heading size="md">{title}</Heading>
        <Text>{role}</Text>
      </Box>
      <Spacer />
      <VStack>
        <Flex>
          {id === 1 && (
            <Icon fontSize="20px" marginRight="10px">
              <AiFillFire size="md" color="red" />
            </Icon>
          )}
          <Icon fontSize="20px" marginRight="10px">
            <FcGlobe size="md" />
          </Icon>
          {id === 1 | id === 2 ? 
            <Icon fontSize="20px" marginRight="10px">
              <BsPinAngleFill size="md" color="skyblue" />
            </Icon>:''
          }
          <Icon
            fontSize="20px"
            marginRight="10px"
            color="gray.400"
            _hover={{ color: "orange.400" }}
          >
            <IoBookmark size="md" />
          </Icon>
        </Flex>
        <Spacer />
        <Text>{type}</Text>
      </VStack>
    </Flex>
  );
};

export default JobTile;
