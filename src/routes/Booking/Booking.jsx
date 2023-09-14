import { Box, Center, Image, VStack } from "@chakra-ui/react";


const Booking = () => {
  return (
    <Box>
      <Image
        src="https://images.unsplash.com/photo-1484949909760-d37c642ad869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        alt="Hero Image"
        width="100%"
        height="300px"
        objectFit="cover"
      />

      <Center py={8} bg="cyan.100">
        <iframe
          width="100%"
          src="https://docs.google.com/forms/d/e/1FAIpQLScjYVrOrygVciyI3IKSCVdnvDDp-9daqrjzxxbIgqvL9m03gA/viewform?embedded=true"
          frameborder="0"
          style="border: none; height: 120vh;"
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
          msallowfullscreen
          marginheight="0"
          marginwidth="0"
        >Loading…</iframe>
      </Center>
    </Box>
  );
};

export default Booking;
