import { Box, Button, Divider, Flex, FormControl, FormLabel, Input, Text, Image } from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <Box>
      <Image src="https://images.unsplash.com/photo-1484949909760-d37c642ad869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Hero Image" width="100%" height="300px" objectFit="cover" />

      <Flex direction={{ base: "column", lg: "row" }} mt="4rem">
        <Box flex={{ lg: "1" }}>
          <Box
            style={{
              margin: "auto",
              height: "100%",
              justifyContent: "center",

              maxWidth: "80%",
            }}
          >

            <Text fontSize="4xl" color="teal.400">
              Contact Us
            </Text>

            <Text fontSize="xl" mt="2rem">
              Phone Number: <Box as="a" href="tel:3069752222" color="teal.400">306-975-2222</Box> &nbsp;/&nbsp; <Box as="a" href="tel:3062205444" color="teal.400">306-220-5444</Box>
            </Text>

            <Text fontSize="xl" my="2rem">
              Email: <Box as="a" href="mailto:adm.jrlshuttleservices@gmail.com" color="teal.400">adm.jrlshuttleservices@gmail.com</Box>
            </Text>


            <Text fontSize="xl" >
              Address: <Box as='span' color="teal.400">110-309 Fairmont Drive Saskatoon SK S7M 5G7</Box>
            </Text>

            <Divider margin="1rem 0" />
          </Box>

        </Box>

        <Box flex={{ lg: "1" }}>
          <iframe
            style={{ width: "100%", height: "100%", minHeight: "400px" }}
            scrolling="no"
            loading="lazy"
            frameBorder="0"
            className="map"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=110-309%20Fairmont%20Drive%20Saskatoon%20SK%20S7M%205G7+(JRL%20Shuttle%20Services)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">Find Population on Map</a>
          </iframe>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactUs;
