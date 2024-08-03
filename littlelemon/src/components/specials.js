import React from 'react';
import { Box, HStack, VStack, Heading, Button, Stack, Center, Flex } from '@chakra-ui/react';
import MenuCard from './menuCard';
import Food1 from '../assets/food1.jpg'
import Food2 from '../assets/food2.jpg'
import Food3 from '../assets/food3.jpg'

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
                                image={Food1}
                                title="Heart Healthy Beans"
                                description="Our hearty bean dishes are a wholesome Mediterranean feast. Packed with fiber and essential nutrients, these flavorful creations nourish your body and soul. From classic hummus to robust chickpea stews, each spoonful is a taste of wellness."
                                price="$19.99"
                                link="#"
                            />
                        </Box>
                        <Box w={{ base: "100%", md: "auto" }} maxW={{ base: "max-content", md: "auto" }}>
                            <MenuCard
                                image={Food2}
                                title="Pasta Delight"
                                description="Immerse yourself in Mediterranean magic with our exquisite pasta dishes. Al dente pasta tossed in rich, savory sauces, topped with sun-dried tomatoes, olives, and fragrant herbs. A symphony of flavors that will transport you to the Italian coast."
                                price="$15.99"
                                link="#"
                            />
                        </Box>
                        <Box w={{ base: "100%", md: "auto" }} maxW={{ base: "max-content", md: "auto" }}>
                            <MenuCard
                                image={Food3}
                                title="Fine Cut Steak"
                                description="Experience the epitome of culinary excellence with our finely cut steak. Tender, juicy, and cooked to perfection, this masterpiece is a carnivore's paradise. Paired with bold Mediterranean flavors, it's a steakhouse experience with a sun-soaked twist."
                                price="$12.99"
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
