import { h } from "preact";
import {
  Box,
  Heading,
  Text,
  Divider,
  Center,
  VStack,
  Image,
} from "@chakra-ui/react";
import vehicel1 from "../../assets/vehicle2.jpg";

function Transportation() {
  return (
    <Center  py="2rem" w="100vw" bg="gray.100">
      <VStack
        spacing={8}
        p={8}
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        w="80%"
      >
        <Heading color="teal.500">Special Needs Transportation</Heading>

        <Box w="100%">
          <Heading size="md" color="teal.400">
            Service
          </Heading>
          <Text>
            We offer transportation services tailored for children, teenagers,
            adults, and seniors with special needs. Whether it's for school,
            work, medical appointments, or leisure, we're here to serve you!
          </Text>
        </Box>

        <Box w="100%">
          <Heading size="md" color="teal.400">
            Fleet
          </Heading>
          <Text>
            Our vehicles are among the largest wheelchair-accessible vans in
            Saskatchewan, capable of accommodating all types of wheelchairs,
            including wide, electric, and scooters.
          </Text>
        </Box>

        <Box w="100%">
          <Heading size="md" color="teal.400">
            Lifts
          </Heading>
          <Text>
            All our lifts can handle weights of approximately 700+ pounds. We
            also offer bariatric lifts suitable for wheelchairs up to 40 inches
            in width.
          </Text>
        </Box>

        <Box w="100%">
          <Heading size="md" color="teal.400">
            Safety
          </Heading>
          <Text>
            Our vans come equipped with 4-point ratchet-style tie-downs and
            seatbelt/shoulder strap restraint systems. For your comfort, rear
            heaters and air conditioning are also provided.
          </Text>
        </Box>

        <Divider my={4} />

        <Image
          src={vehicel1}
          alt="Vehicle Image"
          w="20rem"
          objectFit="cover"
          borderRadius="md"
          boxShadow="sm"
          mb={4}
        />

        <Box w="100%">
          <Heading size="md" color="teal.400">
            In Saskatoon
          </Heading>
          <Text>
            We provide safe transfers for all long-term care facilities and
            hospitals in the Saskatoon area. Let us transport you from your
            home, nursing home, or hospital room to any destination within the
            city.
          </Text>
        </Box>

        <Box w="100%">
          <Heading size="md" color="teal.400">
            In Prince Albert
          </Heading>
          <Text>
            Our services in Prince Albert are coming soon. Stay tuned!
          </Text>
        </Box>

        <Box w="100%">
          <Heading size="md" color="teal.400">
            Throughout Saskatchewan
          </Heading>
          <Text>
            We invite you to experience our exceptional transportation service
            and save! JRL Shuttle Services transports medical patients from
            Saskatoon to other Health Regions across the province. We're eager
            to assist patients in your Health Region when their medical needs
            bring them to Saskatoon.
          </Text>
        </Box>
      </VStack>
    </Center>
  );
}

export default Transportation;
