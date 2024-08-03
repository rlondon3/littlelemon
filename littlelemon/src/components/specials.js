import React from 'react';
import { Box, HStack, VStack, Heading, Button, Stack, Center, Flex } from '@chakra-ui/react';
import MenuCard from './menuCard';

const Specials = () => {
    return (
        <Box bg="gray.50" p={8}>
            <VStack spacing={8} align="stretch">
                <HStack justify="space-between" w="100%" flexWrap={{ base: "wrap", md: "nowrap" }}>
                    <Heading ml={32} as="h2" size="xl">
                        This week's specials!
                    </Heading>
                    <Button mr={32} bg="#F4CE14" size="md">
                        Order Online
                    </Button>
                </HStack>
                <Center w="100%">
                <Flex>
                    <Stack
                        direction={{ base: "column", md: "row" }}
                        spacing={8}
                        w="100%"
                        align="center"
                    >
                        <Box w={{ base: "100%", md: "auto" }} maxW={{ base: "max-content", md: "auto" }}>
                            <MenuCard
                                image="assets/image1.png"
                                title="Card Title 1"
                                description="Description for card 1"
                                link="#"
                            />
                        </Box>
                        <Box w={{ base: "100%", md: "auto" }} maxW={{ base: "max-content", md: "auto" }}>
                            <MenuCard
                                image="assets/image2.png"
                                title="Card Title 2"
                                description="Description for card 2"
                                link="#"
                            />
                        </Box>
                        <Box w={{ base: "100%", md: "auto" }} maxW={{ base: "max-content", md: "auto" }}>
                            <MenuCard
                                image="assets/image3.png"
                                title="Card Title 3"
                                description="Description for card 3"
                                link="#"
                            />
                        </Box>
                    </Stack>
                    </Flex>
                </Center>
            </VStack>
        </Box>
    );
};

export default Specials;
