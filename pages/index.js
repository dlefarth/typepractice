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

      <Center hegith="100%">
        <Stack>
          <Heading>
            Welcome to Typepractice
        </Heading>
          <Center>
            <Link href="/game" style={{ margin: '2rem' }}>
              <Button color="primary">Play</Button>
            </Link>
            <Link href="">
              <Button>Register</Button>
            </Link>
          </Center>
        </Stack>
      </Center>
    </div>
  )
}

export default Home;