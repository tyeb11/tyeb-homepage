import Layout from "@/components/layouts/article";
import Section from "@/components/section";

import { Box, Container, useColorModeValue, Heading, Image, Text, Flex, Grid, GridItem } from "@chakra-ui/react";




function Home() {
  return <>
    <Layout>

      <Container
        id="home"
        mt={{ base: 20 }} p={5}>
        <Box
          display='flex'
          align="center"
          justify='center'
          flexDir="column"
          mb={10}
        >

          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="300px"
            h="300px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
            mb={{ base: 8, md: 5, sm: 3 }}
            m="auto"
            textAlign="center"
          >
            <Image
              src="/images/tayyeb.jpeg"
              alt="Profile image"
              borderRadius="full"
              boxSize="full"

            />
          </Box>
          <Box flexGrow={1} mb={{ base: 14, md: 11, sm: 8 }}>
            <Heading as="h2" textAlign="center" variant="page-title">
              Tayyeb Vhora
            </Heading>

          </Box>
          <Box
            borderRadius="lg"
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            Hello, I&apos;m an mern-stack developer based in Bengaluru!
          </Box>
        </Box >
        <Section delay={.1} >
          <Heading id="about" as="h3" variant="section-title">About</Heading>
          <Text as="p" textAlign="center" >
            Tayyeb is full-stack developer based in Bengaluru with a
            passion for building digital services/stuff he wants. He has a knack
            for planning and designing all the way to solving real-life problems with code. When not online, he loves
            to hang out with his friends, travel and play video games.
          </Text>
        </Section>
        <Section delay={.2} >
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <Flex pl={3.4}  textIndent={-3.4}>
            <Text as="span" fontWeight="bold">2017</Text>
            <Text as="span" ml={4}>

            Secondary Schooling from Chavara English Medium School Nandurbar
            </Text>
          </Flex>
          <Flex pl={3.4}  textIndent={-3.4}>
            <Text as="span" fontWeight="bold">2019</Text>
            <Text as="span" ml={4}>

            Higher Secondary Schooling from Upadhye Colledge of Science Nashik
            </Text>
          </Flex>
          <Flex pl={3.4} textIndent={-3.4}>
            <Text as="span" fontWeight="bold">2022</Text>
            <Text as="span"   ml={4}>

            Bachelor&apos;s in Game and Mobile Software Development from Tilak Maharashtra Vidyapeeth
            </Text>
          </Flex>
        </Section>
        <Section delay={.3}>
          <Heading as="h3" variant="section-title">
            Skill
          </Heading>
          <Grid ml={10} templateColumns='repeat(3,1fr)'>
            <GridItem>C++</GridItem>
            <GridItem>Java</GridItem>
            <GridItem>JS</GridItem>
            <GridItem>TS</GridItem>
            <GridItem>React</GridItem>
            <GridItem>Next</GridItem>
            <GridItem>Node</GridItem>
            <GridItem>MongoDB</GridItem>
            <GridItem>SQL</GridItem>
            <GridItem>Git & Github</GridItem>
            <GridItem>Linux</GridItem>
            <GridItem>Linode</GridItem>
            <GridItem>Vim</GridItem>
            <GridItem>Unity</GridItem>
            <GridItem>Unreal</GridItem>
            <GridItem>Pygame</GridItem>
          </Grid>
        </Section>
        <Section delay={.4}>
          <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Text>Travel, Music, Movies, Video Games (Overwatch, League of Legends).</Text>
        </Section>
        <Section delay={.5}>
           <Heading as="h3" variant="section-title">
          Find me
        </Heading>
        </Section>
      </Container>
    </Layout>
  </>
}

export default Home;
