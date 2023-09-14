import {
    Box,
    Flex,
  } from "@chakra-ui/react";
  import Banner from '../../components/Home/Banner/Banner'
  import Feature from "../../components/Home/Feature/Feature";
  import Testimonials from "../../components/Home/Testimonials/Testimonials";
  
  
  const Home = () => {
    return (
      <Box width="100%">
        <Banner />
        <Feature />
        <Flex direction={{ base: "column", lg: "row" }}>
          <Box flex={{ lg: "1" }}>
            <iframe
              width="100%"
              
              src="https://docs.google.com/forms/d/e/1FAIpQLScjYVrOrygVciyI3IKSCVdnvDDp-9daqrjzxxbIgqvL9m03gA/viewform?embedded=true"
              frameborder="0"
              style="border: none; height: 40vh;"
              allowfullscreen
              webkitallowfullscreen
              mozallowfullscreen
              msallowfullscreen
              marginheight="0"
              marginwidth="0"
            >Loading…</iframe>
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
        <Testimonials></Testimonials>
      </Box>
    );
  };
  
  export default Home;
  