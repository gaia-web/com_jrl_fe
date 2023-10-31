import { ChakraProvider, Divider } from "@chakra-ui/react";
import { Flex, Box } from "@chakra-ui/react";
import { Route, Router } from "preact-router";
import Home from "./routes/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./routes/AboutUs/AboutUs";
import ContactUs from "./routes/ContactUs/ContactUs";
import Booking from "./routes/Booking/Booking";
import Services from "./routes/Services/Services";
import Transportation from "./routes/Transportation/Transportation";
import MedicalMobility from "./routes/MedicalMobility/MedicalMobility";
import More from "./routes/More/More";
import NotFound from "./routes/NotFound/NotFound";

export function App() {
  return (
    <ChakraProvider>
      <Flex flexDir="column" minH="100vh" 
      // bgColor={"#e0e0e0"}
      >
        <Header />
        <Divider />
        <Box flex="1">
          <Router>
            <Route path="/" component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/booking" component={Booking} />
            <Route path="/services" component={Services} />
            <Route path="/transportation" component={Transportation} />
            <Route path="/mobility" component={MedicalMobility} />
            <Route path="/more" component={More} />
            <Route default component={NotFound} />
          </Router>
        </Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}
