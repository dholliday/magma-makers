"use client";
import NextLink from "next/link";
import {
  Heading,
  Text,
  Box,
  Image,
  Avatar,
  Link,
  Card,
  CardBody,
  CardFooter,
  Button,
  Stack,
} from "@chakra-ui/react";
import { projects } from "@/data/projects";
import { makers } from "@/data/makers";
import { FiExternalLink } from "react-icons/fi";

export default async function Makers() {
  return projects
    ? projects.map((project) => {
        return (
          <Card
            key={project.name}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "300px" }}
              src={project.logoUri}
              alt={project.name}
            />

            <Stack>
              <CardBody>
                <Link as={NextLink} href={project.url} isExternal>
                  <Heading size="md">{project.name}</Heading>
                </Link>

                <Text py="2">{project.shortDescription}</Text>
                <Text py="2">{project.longDescription}</Text>
              </CardBody>

              <CardFooter>
                <Link
                  as={NextLink}
                  href={project.url}
                  isExternal
                  fontSize="2em"
                >
                  <FiExternalLink />
                </Link>
              </CardFooter>
            </Stack>
          </Card>
        );
      })
    : "No Projects Found";
}
