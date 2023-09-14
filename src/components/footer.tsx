import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SmallWithNavigation() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"8xl"}
        py={8}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
        fontSize="sm"
      >
        <Stack direction={"row"} spacing={6}>
          <Text>
            Copyright © 2023 JRL Shuttle Services - Saskatoon - All Rights
            Reserved.
          </Text>
        </Stack>
        <Text>
          © 2023JRL SHUTTLE SERVICES. All rights reserved |
          Website design and development by  Gaia WEBSITE 
        </Text>
      </Container>
    </Box>
  );
}
