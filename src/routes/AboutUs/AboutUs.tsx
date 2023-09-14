import { Box, Center, Text, Button, VStack, Image } from "@chakra-ui/react";
import { Link } from "preact-router/match";

const BookNowButton = () => {
  return (
    <Link href="/booking">
      <Button colorScheme="teal" size="lg" shadow="md" mt={6}>
        Book Now
      </Button>
    </Link>
  );
};

const AboutUs = () => {
  return (
    <Box bgColor="cyan.100">
      <Image src="https://images.unsplash.com/photo-1484949909760-d37c642ad869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Saskatoon" maxH="20rem" width="100%"  objectFit="cover" />
      <Center margin="auto" height="100vh" mt="-16rem">
        <VStack spacing={6} p={8} bgColor="white" borderRadius="md" shadow="xl" width="80%">
          <Text fontSize="4xl" fontWeight="bold" color="teal.400">About JRL Shuttle Services:</Text>
          <Text fontSize="lg">
            <b>JRL Shuttle Services</b>, inspired by the dedication and commitment of AV Shuttle Cab, is <b color="teal.400">proud</b> to be one of the leading transportation services in the region. Established with a vision to provide unparalleled transportation solutions, we prioritize the <b color="teal.400">safety, comfort, and convenience</b> of our passengers. Our fleet is equipped to cater to diverse needs, ensuring that every journey with us is smooth and hassle-free.
          </Text>
          <Text fontSize="lg">
            With years of experience under our belt, we understand the importance of <b color="teal.400">reliability</b> in our industry. Our team is trained to offer personalized services, understanding and catering to the unique requirements of each passenger. Whether you need assistance with special needs transportation or are simply looking for a trustworthy ride, <b>JRL Shuttle Services</b> is here for you.
          </Text>
          <Text fontSize="lg">
            We are more than just a shuttle service; we are a community of professionals dedicated to making your travels <b color="teal.400">memorable</b>. Join us and experience the difference.
          </Text>
          <Text fontSize="md" fontWeight="medium">Email: adm.jrlshuttleservices@gmail.com</Text>
          <Text fontSize="md" fontWeight="medium" color="teal.400">Company Name: JRL Shuttle Services</Text>
          <Text fontSize="md" fontWeight="medium">Address: 110-309 Fairmont Drive Saskatoon SK S7M 5G7</Text>
          <BookNowButton />
        </VStack>
      </Center>
    </Box>
  );
};

export default AboutUs;
