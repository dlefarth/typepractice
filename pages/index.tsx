import { Heading, Stack, Center, Button, Box, Link } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <Box>
      <Head>
        <title>Typepractice</title>
      </Head>

      <Center mt={20}>
        <Stack>
          <Heading as="h1" size="2xl">
            Welcome to TypePractice
          </Heading>
          <Center mt={10}>
            <NextLink href="/game">
              <Button colorScheme="teal" mx={5} size="lg">
                Play
              </Button>
            </NextLink>
            <NextLink href="/api/auth/login">
              <Button size="lg" mx={5}>
                Login
              </Button>
            </NextLink>
          </Center>
        </Stack>
      </Center>
    </Box>
  );
};

export default Home;
