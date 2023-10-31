import { Box, Heading, Text, VStack, Center } from '@chakra-ui/react';

function MedicalMobility() {
  return (
    <Center py="2rem" w="100vw" bg="gray.100">
      <VStack spacing={6} p={6} bg="white" borderRadius="md" boxShadow="lg" w="80%">
        <Heading color="teal.500">MEDICAL MOBILITY SERVICES</Heading>

        <Box w="100%">
          <Heading size="md" color="teal.400">Our Commitment</Heading>
          <Text>At JRL Shuttle Services, we understand the unique transportation needs of individuals. We specialize in assisting those who are mobile but may require a bit of extra support. Whether you use walkers, canes, or simply need a gentle hand, we're here for you. Beyond just transportation, we offer assistance with errands, ensuring you're comfortably settled into your appointments. If you're looking for a companion during your outing, we've got you covered.</Text>
        </Box>

        <Box w="100%">
          <Heading size="md" color="teal.400">Saskatoon Services</Heading>
          <Text>For over two decades, JRL Shuttle Services has been the trusted choice for safe transfers across all long-term care facilities and hospitals in Saskatoon. Our dedicated team ensures that whether it's your home, a nursing facility, or a hospital room, you'll reach your destination safely and on time.</Text>
        </Box>

        <Box w="100%">
          <Heading size="md" color="teal.400">Prince Albert Services</Heading>
          <Text>We're excited to announce that our services in Prince Albert are on the horizon! Stay tuned for our top-notch door-to-door service, bringing our commitment to service with a smile to even more residents.</Text>
        </Box>

        <Box w="100%">
          <Heading size="md" color="teal.400">Statewide in Saskatchewan</Heading>
          <Text>Experience transportation like never before. JRL Shuttle Services proudly transports medical patients across various Health Regions in the province. Whether your medical needs are in Saskatoon, Prince Albert, or elsewhere, we're eager to serve your Health Region. Our goal is to provide a seamless journey, ensuring every patient feels valued and cared for.</Text>
        </Box>
      </VStack>
    </Center>
  );
}

export default MedicalMobility;
