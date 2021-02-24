import { Heading, Button, Stack, Box } from '@chakra-ui/core';
import { Center } from '@chakra-ui/react';
import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Typepractice</title>
      </Head>

      <Center mt={20}>
        <Stack>
          <Heading as="h1" size="2xl">
            Welcome to TypePractice
          </Heading>
          <Center mt={10}>
            <Link href="/game">
              <Button colorScheme="blue" mx={5} size="lg">Play</Button>
            </Link>
            <Link href="" mx={5}>
              <Button size="lg">Register</Button>
            </Link>
          </Center>
        </Stack>
      </Center>
    </div>
  )
}

export default Home;