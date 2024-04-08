"use client";
import NextLink from "next/link";
import { Heading, Text, Box, Image, Avatar, Link } from "@chakra-ui/react";
import { projects } from "@/data/projects";
import { makers } from "@/data/makers";

export default async function Makers() {
  return projects
    ? projects.map((project) => {
        return (
          <Box key={project.name}>
            <Box>
              <Link as={NextLink} href={project.url} isExternal>
                {project.name}
              </Link>
            </Box>
            <Box>{project.shortDescription}</Box>
            <Box>{project.longDescription}</Box>
          </Box>
        );
      })
    : "No Projects Found";
}
