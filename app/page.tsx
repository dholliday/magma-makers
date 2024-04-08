import Makers from "@/components/Makers";
import Projects from "@/components/Projects";
import { Heading, Text, Box, Container, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container p="8" bg="brand.bg" color="brand.main" maxW="container.lg">
      <Stack direction="column" spacing="12">
        <Heading fontSize="6em" color="brand.main">
          Magma Makers
        </Heading>
        <Text fontSize="1.5em" mb="8">
          Forging the future one 🩸 at a time.
        </Text>
        <Makers></Makers>
        <Heading fontSize="4em">Makes</Heading>
        <Projects></Projects>
      </Stack>
    </Container>
  );
}
