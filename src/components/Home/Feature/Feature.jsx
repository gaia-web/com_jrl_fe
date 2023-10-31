"use strict";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoShieldCheckmarkSharp,
  IoPeopleSharp,
  IoGlobeOutline,
} from "react-icons/io5";

import vehicle1 from "../../../assets/vehicle1.jpg";

const Feature = ({ text, description, icon, iconBg }) => {
  return (
    <Stack direction={"column"} spacing={2}>
      <Stack direction={"row"} align={"center"}>
        <Flex
          w={8}
          h={8}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          bg={iconBg}
        >
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
      <Box pl={12}>
        <Text color={"gray.500"}>{description}</Text>
      </Box>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={{ base: 12, md: 20 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            About JRL
          </Text>
          <Heading>JRL SHUTTLE SERVICES</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            As a leading transportation service provider, we are committed to
            offering our customers a safe, efficient, and comfortable travel
            experience.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon
                  as={IoShieldCheckmarkSharp}
                  color={"yellow.500"}
                  w={5}
                  h={5}
                />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Professional Accreditation"}
              description={
                "Our team is professionally trained to ensure the highest standard of service for you."
              }
            />
            <Feature
              icon={<Icon as={IoPeopleSharp} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Customer-Centric"}
              description={
                "We understand the needs of each customer and strive to offer personalized services."
              }
            />
            <Feature
              icon={
                <Icon as={IoGlobeOutline} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Extensive Services"}
              description={
                "Whether you are an individual or a group, we have the transportation solution for you."
              }
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={vehicle1}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
