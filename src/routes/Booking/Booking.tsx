import { Box, Center, Text, Input, Textarea, Button, VStack, Heading, Image } from "@chakra-ui/react";

const Booking = () => {
  return (
    <Box>
      <Image src="https://images.unsplash.com/photo-1484949909760-d37c642ad869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Hero Image" width="100%" height="300px" objectFit="cover" />

      <Center bg="cyan.100" py={8}>
        <VStack spacing={6} p={8} bgColor="white" borderRadius="md" shadow="xl" width="80%">
          <Heading color="teal.400">Book Now with JRL Shuttle Services</Heading>
          <Text fontSize="lg" color="gray.600">Please fill out the form below to book your ride:</Text>
          
          <Input placeholder="Name" variant="flushed" focusBorderColor="teal.400" mb={4} />
          <Input placeholder="Email" type="email" variant="flushed" focusBorderColor="teal.400" mb={4} />
          <Input placeholder="Phone" type="tel" variant="flushed" focusBorderColor="teal.400" mb={4} />
          <Textarea placeholder="Comments" variant="flushed" focusBorderColor="teal.400" mb={4} />

          <Button colorScheme="teal" size="lg" shadow="md">Submit</Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default Booking;
