import React from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';


const MenuCard = ({ image, title, description, price, link }) => {
    return ( 
        <Card maxW='sm'>
  <CardBody bg='#EDEFEE'>
    <Image
      src={image}
      alt={description}
      borderRadius='lg'
      height={"250px"}
      width={"400px"}
      style={{ objectFit: "cover"}}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Text>
        {description}
      </Text>
      <Text color='#EE9972' fontSize='2xl'>
        {price}
      </Text>
    </Stack>
  </CardBody>
  <CardFooter bg='#EDEFEE'>
    <ButtonGroup spacing='2'>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
     );
}
 
export default MenuCard;