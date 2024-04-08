import Makers from "@/components/Makers";
import Projects from "@/components/Projects";
import { Heading, Text, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Heading>Magma Makers</Heading>
      <Text>Forging the future one 🩸 at a time</Text>
      <Box>
        <Heading>Makers</Heading>
        <Makers></Makers>
      </Box>
      <Box>
        <Heading>Projects</Heading>
        <Projects></Projects>
      </Box>
    </>
  );
}
