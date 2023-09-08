import { ChakraProvider, Divider } from "@chakra-ui/react";
import { Flex, Box } from "@chakra-ui/react";
import { Route, Router } from "preact-router";
import Home from "./routes/Home/Home";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutUs from "./routes/AboutUs/AboutUs";
import ContactUs from "./routes/ContactUs/ContactUs";

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
          </Router>
        </Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}
