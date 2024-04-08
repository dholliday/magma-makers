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
        return (
          <Box key={maker.id}>
            <Link
              as={NextLink}
              href={`https://twitter.com/${maker.xHandle}`}
              isExternal
            >
              <Avatar size="2xl" name={maker.name} src={maker.pfp} />
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
