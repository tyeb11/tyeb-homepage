import Layout from "@/components/layouts/article";
import Projects from "@/components/projects";
import Section from "@/components/section";
import data from '@/db.json'
import { Box, Container, useColorModeValue, Heading, Image, Text, Flex, Grid, GridItem} from "@chakra-ui/react";





function Home() {
  
  return <>
    <Layout>

      <Container
        id="home"
        mt={{ base: 20 }} p={5}>
        <Section delay={.2}>

        <Box
          display='flex'
          align="center"
          justify='center'
          flexDir="column"
          mb={10}
          >

          <Box
            borderColor={useColorModeValue("blackAlpha.400","whiteAlpha.800")}
            borderWidth={2}
            borderStyle="solid"
            w="300px"
            h="300px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
            
            m="auto"
            textAlign="center"
            >
            <Image
              src="/images/IMG.png"
              alt="Profile image"
              
              borderRadius="full"
              boxSize="full"
              
              />
          </Box>
          <Box flexGrow={1} mt={2} mb={{ base: 4, md: 11, sm: 8 }}>
            <Heading mb={2} as="h2" textAlign="center" variant="page-title">
              Tayyeb Vhora
            </Heading>
            <p >( Game/Web Developer )</p>

          </Box>
          <Box
            borderRadius="lg"
            p={3}
            textAlign="center"
            bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
            >
            Hello, I&apos;m a mern-stack developer based in {data.currentLocation}!
          </Box>
        </Box >
            </Section>
        <Section  delay={.4} >
          <Heading id="about"  as="h3" variant="section-title">About</Heading>
          <Text as="p" textAlign="left" >
            Tayyeb is a full-stack developer based in Bengaluru with a
            passion for building digital services/stuff he wants. He has a knack
            for planning and designing all the way to solving real-life problems with code. When not online, he loves
            to hang out with his friends, travel and play video games.
          </Text>
        </Section>
        <Section delay={.5} >
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

            Bachelor&apos;s in Game and Mobile Software Development from Tilak Maharashtra Vidyapeeth Pune
            </Text>
          </Flex>
        </Section>
        <Section  delay={.6}>
          <Heading id="projects" as="h3" variant="section-title">
            Projects
          </Heading>
            <Projects/>
        </Section>
        <Section delay={.7}>
          <Heading as="h3" variant="section-title">
            Skill
          </Heading>
          <Grid  templateColumns='repeat(4,1fr)'>
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
        <Section  delay={.8}>
          <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Text>{data.iLove}</Text>
        </Section>
        <Section delay={.9}>
           <Heading mb={7} as="h3" variant="section-title">
          Find me
        </Heading>
        <Grid id="contact" ml={10} templateColumns='repeat(4,1fr)'>
          
        <GridItem as="a" href="https://twitter.com/MerchantTayyeb" target="_self" className="zocial twitter icon"></GridItem>
        <GridItem as="a" href="https://github.com/tyeb11" target="_self" className="zocial github icon"></GridItem>
        <GridItem as="a" href="https://www.linkedin.com/in/tayyeb-vhora-4a687520b/" target="_self" className="zocial linkedin icon"></GridItem>
        <GridItem as="a" href="mailto:tayyeb@tyeb.dev" className="zocial gmail icon"></GridItem>
        </Grid>
        
        </Section>
      </Container>
    </Layout>
  </>
}

export default Home;
