import type { NextPage } from 'next'
import Head from 'next/head'
import { Flex, Heading } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ernesto Arellano | Front-End Engineer</title>
      </Head>
      <Flex alignItems='center' justifyContent='center' h='100vh' color='white' backgroundColor='black'>
        <Heading>In-Development</Heading>
      </Flex>
    </>
  )
}

export default Home
