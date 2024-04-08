"use client";
import NextLink from "next/link";
import { Heading, Text, Box, Image, Avatar, Link } from "@chakra-ui/react";
import { makers } from "@/data/makers";

export default async function Makers() {
  return makers
    ? makers.map((maker) => {
        return (
          <Box key={maker.id}>
            <Box>
              <Link
                as={NextLink}
                href={`https://twitter.com/${maker.xHandle}`}
                isExternal
              >
                <Avatar size="2xl" name={maker.name} src={maker.pfp} />
              </Link>
            </Box>
            <Box>{maker.name}</Box>
          </Box>
        );
      })
    : "No Makers Found";
}
