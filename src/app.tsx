import { ChakraProvider, Divider } from "@chakra-ui/react";
import { Flex, Box } from "@chakra-ui/react";
import { Route, Router } from "preact-router";
import Home from "./routes/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./routes/AboutUs/AboutUs";
import ContactUs from "./routes/ContactUs/ContactUs";
import Booking from "./routes/Booking/Booking";

export function App() {
  return (
    <ChakraProvider>
      <Flex flexDir="column" minH="100vh">
        <Header />
        <Divider />
        <Box flex="1">
          <Router>
            <Route path="/" component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/booking" component={Booking} />
          </Router>
        </Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}
