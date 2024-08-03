import React from 'react';
import { Box, Flex, VStack, Stack, Heading, Text, Image } from '@chakra-ui/react';
import BookingModal from '../resuable/bookingModal';
import BookingForm from '../pages/bookingForm';

const CallToAction = ({ formData, availableTimes, handleChange, dispatch, submitForm }) => {
  return (
    <Box bg="#495E57" p={8}>
      <Flex direction={['column', 'row']} align="center" justify="space-between">
        <Box flex={1}>
          <VStack align="flex-start" spacing={4}>
            <Heading color='#F4CE14' as="h2" size="xl">
              Little Lemon
            </Heading>
            <Heading color='white' as="h3" size="lg">
              Chicago
            </Heading>
            <Text color='white' fontSize="md">
              We are a family owned Meditteranean restaurant, focused on traditional recipes served with a modern twist.
            </Text>
            <BookingModal buttonText="Reserve Table" title="Reservation Form">
            <BookingForm
              formData={formData}
              availableTimes={availableTimes}
              handleChange={handleChange}
              dispatch={dispatch}
              submitForm={submitForm}
            />
            </BookingModal>
          </VStack>
        </Box>
        <Box flex={1} mt={[8, 0]}>
          <Stack align="center">
            <Image src="assets/your-image.png" alt="Your Image Description" />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default CallToAction;
