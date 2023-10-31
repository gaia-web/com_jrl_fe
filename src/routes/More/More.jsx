import { Box, Heading, Text, VStack, Center, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

function More() {
  return (
    <Center py="2rem" w="100vw" bg="gray.100">
      <VStack spacing={6} p={6} bg="white" borderRadius="md" boxShadow="lg" w="80%">
        <Heading color="teal.500">WHAT WE CAN TRANSPORT</Heading>

        <Text>At JRL Shuttle Services, we pride ourselves on our versatility and commitment to ensuring everyone's mobility needs are met. Our fleet is equipped to handle a wide range of mobility devices, ensuring that you can travel with confidence, knowing your equipment is in safe hands.</Text>

        <Box w="100%">
          <Heading size="md" color="teal.400" mb="1rem">Our Transportation Capabilities Include:</Heading>
          <List spacing={2}>
            <ListItem><ListIcon as={CheckCircleIcon} color="teal.400" />Broda Chair: Specifically designed for long-term care patients, Broda chairs offer comfort and therapeutic benefits.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="teal.400" />Scooters: From compact travel scooters to full-sized heavy-duty ones, we've got you covered.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="teal.400" />Manual Wheelchairs: Lightweight and foldable, we handle them with the care they deserve.</ListItem>
            <ListItem><ListIcon as={CheckCircleIcon} color="teal.400" />Electric Wheelchairs: Offering independence, we ensure they are transported securely.</ListItem>
          </List>
        </Box>

        <Text>Choose JRL Shuttle Services for all your mobility transportation needs. We're not just a transport service; we're a partner in ensuring your mobility is never compromised.</Text>
      </VStack>
    </Center>
  );
}

export default More;
