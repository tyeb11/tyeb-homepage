import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../footer";
import Navbar from "../navbar";

function Main({ children, router }) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tayyeb's homepage" />
        <meta name="author" content="Tayyeb Vhora" />
        <meta name="shortcut icon" content="" />
        <title>Tayyeb Vhora&apos;s - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW={{base:"container.md",sm:"container.sm"}} pt={{base:14}}>
        {children}
        <Footer/>
      </Container>
    </Box>
  );
}

export default Main;
