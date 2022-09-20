import {
    Button,
  Center,
  Container,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { FiFilter,FiCode,FiTrendingUp } from "react-icons/fi";
import { FcGlobe } from "react-icons/fc";
const SearchHeader = () => {
  return (
    <Container padding="0px" maxW='100%'>
    <Container padding="0px">

      <Center h="300px">
        <Heading textAlign="center" fontSize="3.5rem">
          Find The Right{" "}
          <Link bgClip="text" bgGradient="linear(to-r, purple.500, blue.500)">
            Four-Day
          </Link>{" "}
          Week Job
        </Heading>
      </Center>
      <Flex>
        <Input
          shadow="xl"
          borderColor="gray.300"
          size="lg"
          borderRadius="15px"
          placeholder="Type job title or keyword"
          _placeholder={{ opacity: 1, color: 'gray.400' }}
          />{" "}
        <IconButton
          size="lg"
          marginLeft="10px"
          color="gray.400"
          borderRadius="10px"
          icon={<FiFilter />}
        />
      </Flex>
    
      <Flex justifyContent='space-between' marginTop='15px' marginBottom='100px' >
        <Button border='2px solid rgb(85,60,154)'borderRadius='10px' width='150px'bg='color.brand'color='gray.200'><Icon fontSize='25px'marginRight='10px' ><FcGlobe size='lg'/></Icon> Remote</Button>
        <Button border='2px solid rgb(85,60,154)'borderRadius='10px' width='150px'bg='color.brand'color='gray.200'><Icon fontSize='25px'marginRight='10px'><FiCode size='lg'/></Icon> Tech</Button>
        <Button border='2px solid rgb(85,60,154)'borderRadius='10px' width='150px'bg='color.brand'color='gray.200'><Icon fontSize='25px'marginRight='10px' color='orange'><FiTrendingUp size='lg' /></Icon> Marketing</Button>
      </Flex>
          </Container>
    </Container>
  );
};

export default SearchHeader;
