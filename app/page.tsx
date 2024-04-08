import Makers from "@/components/Makers";
import Projects from "@/components/Projects";
import NextLink from "next/link";
import {
  Heading,
  Text,
  Box,
  Container,
  Stack,
  Link,
  Button,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container p="8" bg="brand.bg" color="brand.main" maxW="container.lg">
      <Stack direction="column" spacing="12">
        <Heading fontSize="6em" color="brand.main">
          Magma Makers
        </Heading>
        <Text fontSize="1.5em">Forging the future one 🩸 at a time.</Text>
        <Text fontSize="1.5em">
          Join in with the lively community discussions in our{" "}
          <Link
            href="https://twitter.com/i/communities/1766007547775873227"
            isExternal
            textDecoration="underline"
          >
            X Community
          </Link>
        </Text>
        <Makers></Makers>
        <Box>
          <Link
            as={NextLink}
            href="https://github.com/dholliday/magma-makers"
            isExternal
          >
            <Button bg="brand.main">Register your Make on GitHub</Button>
          </Link>
        </Box>

        <Heading fontSize="4em">🩸 makes </Heading>
        <Projects></Projects>
      </Stack>
    </Container>
  );
}
