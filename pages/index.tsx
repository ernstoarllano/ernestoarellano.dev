import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Grid, GridItem, Flex, Heading } from '@chakra-ui/react'
import useDate from '../hooks/useDate'
import dynamic from 'next/dynamic'

const Home: NextPage = () => {
  const [isScrolled, setIsScrolled] = useState<boolean | false>(false)
  const backgroundColor = isScrolled ? 'transparent' : 'white'
  const { hour, minute, seconds, period } = useDate()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Ernesto Arellano | Front-End Engineer</title>
      </Head>
      <Box as='header' pos='fixed' top={0} left={0} right={0} p={8} backgroundColor={backgroundColor} zIndex={50}>
        <Grid templateColumns='repeat(12, 1fr)'>
          <GridItem colStart={1} colEnd={6}>
            <Heading as='h1' fontSize='sm'>
              <Flex direction='column' alignItems='flex-start' textTransform='uppercase'>
                <Box as='span' px={2} py={1} textColor='white' backgroundColor='black'>Ernesto Arellano</Box>
                <Box as='span' px={2} py={1} backgroundColor='white'>Front-End Engineer</Box>
              </Flex>
            </Heading>
          </GridItem>
          <GridItem colStart={8} colEnd={-1}>
            <Flex direction='column' alignItems='flex-end' fontSize='xs'>
              <Box as='span' fontWeight='bold' textTransform='uppercase'>Based in San Diego, CA</Box>
              <Box as='span' fontWeight='bold'>
                <Box as='span' display='inline-flex'>{hour}:</Box>
                <Box as='span' display='inline-flex'>{minute}:</Box>
                <Box as='span' display='inline-flex' w={4}>{seconds}</Box>
                <Box as='span' display='inline-flex' ml={1}>{period}</Box>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      <Box as='main' pos='relative' h='100vh' p={8} zIndex={40}>
        <Flex alignItems='center' justifyContent='center' h='full'>
          <Heading as='h2'>In-Development</Heading>
        </Flex>
      </Box>
    </>
  )
}

export default dynamic(() => Promise.resolve(Home), { ssr: false })