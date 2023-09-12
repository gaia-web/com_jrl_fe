import {
  Box,
  Button,
  Input,
  FormControl,
  Flex,
  Text,
  FormLabel,
  Textarea,
  Divider,
  Center,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Box width="100%">
      <Center margin="auto" height="800px" bgColor="cyan.100">
        <Box>
          <Text fontSize="3xl">About Us:</Text>
          <Text>Email: adm.jrlshuttleservices@gmail.com</Text>
          <Text>Company Name: JRL Shuttle Services</Text>
          <Text>Address: 110-309 Fairmont Drive Saskatoon SK S7M 5G7</Text>
        </Box>
      </Center>
      <Flex direction={{ base: "column", lg: "row" }}>
        <Box flex={{ lg: "1" }}>
          <form
            style={{
              padding: "4rem 10%",
            }}
            onSubmit={(e: any) => {
              e.preventDefault();
              console.log(e.target[0].value);
              console.log(e.target[1].value);
              console.log(e.target[2].value);
              console.log(e.target);

              // emailjs
              //   .send(
              //     "service_g16pcek",
              //     "template_u7z8hy7",
              //     {
              //       from_name: "JRL_shuttle",
              //       to_name: "CuStOmEr",
              //       message: "Hello whatever???",
              //     },
              //     "iNAiYa8lKcPAc2OoE"
              //   )
              //   .then(
              //     (result) => {
              //       console.log(result.text);
              //     },
              //     (error) => {
              //       console.log(error.text);
              //     }
              //   );
            }}
          >
            <FormControl
              style={{
                margin: "auto",
                height: "100%",
                justifyContent: "center",

                maxWidth: "80%",
              }}
              //   isRequired
            >
              <Text fontSize="4xl" color="teal.400">
                Contact Us
              </Text>

              <Divider margin="1rem 0" />

              <FormLabel requiredIndicator>Your name</FormLabel>
              <Input isRequired />

              <FormLabel requiredIndicator>Email Address</FormLabel>
              <Input isRequired type="email" />

              <FormLabel requiredIndicator>Message</FormLabel>
              <Textarea />

              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </FormControl>
          </form>
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

export default Home;
