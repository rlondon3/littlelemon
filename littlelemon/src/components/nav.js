import React from 'react';
import { Box, Flex, Stack, Image } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

import Logo from '../assets/main-logo.png';

const Nav = () => {
  return (
    <Box bg="white" px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box color="white" fontWeight="bold" fontSize="lg">
          <Image src={Logo} alt="Brand Logo" height="40px" />
        </Box>

        <Flex alignItems={'right'}>
          <Stack direction={'row'} spacing={4}>
            <ChakraLink as={ReactRouterLink} to="/" color="black" _hover={{ textDecoration: 'none', color: '#495E57' }}>
              Home
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/about" color="black" _hover={{ textDecoration: 'none', color: '#495E57' }}>
              About
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/menu" color="black" _hover={{ textDecoration: 'none', color: '#495E57' }}>
              Menu
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/reservations" color="black" _hover={{ textDecoration: 'none', color: '#495E57' }}>
              Reservations
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/order" color="black" _hover={{ textDecoration: 'none', color: '#495E57' }}>
              Order Online
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/login" color="white" _hover={{ textDecoration: 'none', color: '#495E57' }}>
              Login
            </ChakraLink>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Nav;
