import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Link,
  Button,
} from "@chakra-ui/react";

import vehicel1 from "../../assets/vehicle1.jpg";
import wheelChair from "../../assets/wheelChair.webp";
import ship from "../../assets/ship.webp";

const Services = () => {
  return (
    <Flex justifyContent={"center"} flexDir={{base:"column",md:"row"}}>
      <Transportation></Transportation>
      <Box w="5rem"></Box>
      <MedicalMobility></MedicalMobility>
      <Box w="5rem"></Box>
      <More></More>
    </Flex>
  );
};

export default Services;

function Transportation() {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"430px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"330px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${Image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            // height={330}
            // width={282}
            objectFit={"cover"}
            src={wheelChair}
            alt="#"
          />
        </Box>
        <Stack pt={1} align={"center"}>
          <Text color={"gray.500"} fontSize={"4xl"} textTransform={"uppercase"}>
            ♿️
          </Text>
          <Heading
            fontSize={"4xl"}
            fontFamily={"body"}
            fontWeight={500}
            textAlign={"center"}
          >
            Special Needs Transportation
          </Heading>
          <Stack direction={"row"} align={"center"} mt={"2rem"}>
            <Link href="/transportation">
              <Button>More Details</Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

function MedicalMobility() {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"430px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"330px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${Image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            // height={330}
            // width={282}
            objectFit={"cover"}
            src={vehicel1}
            alt="#"
          />
        </Box>
        <Stack pt={1} align={"center"}>
          <Text color={"gray.500"} fontSize={"4xl"} textTransform={"uppercase"}>
            🚑 
          </Text>
          <Heading
            fontSize={"4xl"}
            fontFamily={"body"}
            fontWeight={500}
            textAlign={"center"}
          >
            Medical Mobility 
          </Heading>
          <Stack direction={"row"} align={"center"} mt={"2rem"}>
            <Link href="/transportation">
              <Button>More Details</Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

function More() {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"430px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"330px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${Image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            // height={330}
            // width={282}
            objectFit={"cover"}
            src={ship}
            alt="#"
          />
        </Box>
        <Stack pt={1} align={"center"}>
          <Text color={"gray.500"} fontSize={"4xl"} textTransform={"uppercase"}>
            💡
          </Text>
          <Heading
            fontSize={"4xl"}
            fontFamily={"body"}
            fontWeight={500}
            textAlign={"center"}
          >
            Medical Services (under process)
          </Heading>
          <Stack direction={"row"} align={"center"} mt={"2rem"}>
            <Link href="/transportation">
              <Button>More Details</Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
