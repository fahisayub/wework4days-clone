import { Box, Center, Container, Divider, Flex, Icon, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaRegCopyright, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Container maxW="100%">
      <Container maxW='90%' padding='0px'>
        <Box display='flex' gap='10px' w='25%' margin='50px'>
          <Text>Contact Us</Text>
          <Text>Legal</Text>
        </Box>
        <Divider/>
        <Flex margin='20px' display={['block','block','flex','flex','flex']}>
        <Box display='flex' >
            <Icon  margin='5px'><FaRegCopyright size='sm' /></Icon>
          <Text >2022 WeWork4Days. All right reserved</Text>
        </Box>
        <Spacer/>
        <Box w='40%'  fontSize='20px' display='flex' justifyContent='space-evenly'>

          <Center w='30px'h='30px' borderRadius='50%' bg='gray.400'><FaFacebook/></Center>
          <Center w='30px'h='30px' borderRadius='50%' bg='gray.400'><FaTwitter/>  </Center>
          <Center w='30px'h='30px' borderRadius='50%' bg='gray.400'><FaInstagram/></Center>
          <Center w='30px'h='30px' borderRadius='50%' bg='gray.400'><FaLinkedin/> </Center>
        </Box>
        </Flex>
      </Container>
    </Container>
  );
};

export default Footer;
