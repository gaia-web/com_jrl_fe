import { Box, Center, Text } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Center margin="auto" height="800px" bgColor="cyan.100">
      <Box>
        <Text fontSize="3xl">About Us:</Text>
        <Text>Email: adm.jrlshuttleservices@gmail.com</Text>
        <Text>Company Name: JRL Shuttle Services</Text>
        <Text>Address: 110-309 Fairmont Drive Saskatoon SK S7M 5G7</Text>
      </Box>
    </Center>
  );
};

export default AboutUs;
