import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Logo2 from '../assets/secondary-logo.png'

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" py={4}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto" px={4}>
        <Image src={Logo2} alt="Logo" boxSize="50px" />
        <Text textAlign="center" w="full">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
