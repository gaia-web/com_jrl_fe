import { ChakraProvider, Divider } from "@chakra-ui/react";
import { Flex, Box } from "@chakra-ui/react";
import { Route, Router } from "preact-router";
import Home from "./routes/Home/Home";
import Header from "./components/header";
import Footer from "./components/footer";

export function App() {
  return (
    <ChakraProvider>
      <Flex flexDir="column" minH="100vh">
        <Header />
        <Divider />
        <Box flex="1">
          <Router>
            <Route path="/" component={Home} />
            {/* <AboutUs path="/about" /> */}
          </Router>
        </Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}
