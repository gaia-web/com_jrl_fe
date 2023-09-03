import {
  Box,
  Button,
  Input,
  FormControl,
  Flex,
  Text,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

const Home = () => {
  return (
    <Box width="100%">
      <Flex>
        <Box flex="1">
          <form
            style={{
              padding: "0 56px",
            }}
            onSubmit={(e: any) => {
              e.preventDefault();
              console.log(e.target[0].value);
              console.log(e.target[1].value);
              console.log(e.target[2].value);
              console.log(e.target);

              emailjs
                .send(
                  "service_g16pcek",
                  "template_u7z8hy7",
                  {
                    from_name: "JRL_shuttle",
                    to_name: "CuStOmEr",
                    message: "Hello whatever???",
                  },
                  "iNAiYa8lKcPAc2OoE"
                )
                .then(
                  (result) => {
                    console.log(result.text);
                  },
                  (error) => {
                    console.log(error.text);
                  }
                );
            }}
          >
            <FormControl
              style={{
                width: "100%",
              }}
              //   isRequired
            >
              <Text fontSize="4xl">Contact Us</Text>

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

        <Box flex="1">
          <iframe
            style={{ width: "100%", height: "100%" }}
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
