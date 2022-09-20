import {  Box, Button, Heading, Icon, Input, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { FaHandPeace } from 'react-icons/fa';

const Newslettertile = () => {
    return (
        <Stack textAlign='center' margin='50px 15px 50px 15px' borderRadius='10px'padding='30px' bgGradient='linear(to-r, purple.500, blue.500)'>
           <Heading  size='md'>Subscribe to Our Newsletter</Heading>
            <Input bg='white'placeholder='Your Email'  type='text'/>
            <Button bg='green.500' color='white' _hover={{bg:'green.600'}}>Submit</Button>
            <Text color='white'>Receive the best job offer every week <Icon color='yellow'><FaHandPeace size='md' /></Icon></Text>

        </Stack>
    );
};

export default Newslettertile;