//@ts-nocheck
"use client";
import NextLink from "next/link";
import {
  Heading,
  Text,
  Box,
  Image,
  Avatar,
  Link,
  Stack,
} from "@chakra-ui/react";
import { makers } from "@/data/makers";

export default async function Makers() {
  return makers ? (
    <Stack direction="row" spacing="1em">
      {makers.map((maker) => {
        const id = Object.keys(maker);
        return (
          <Box key={id}>
            <Link
              as={NextLink}
              href={`https://twitter.com/${maker[id].xHandle}`}
              isExternal
            >
              <Avatar
                size="xl"
                name={maker[id].name}
                src={maker[id].pfp}
                boxShadow="2xl"
              />
            </Link>
          </Box>
        );
      })}
      <Box>More coming...</Box>
    </Stack>
  ) : (
    "No Makers Found"
  );
}
