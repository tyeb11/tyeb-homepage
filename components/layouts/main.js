import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../navbar";

function Main({ children, router }) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tayyeb's homepage" />
        <meta name="author" content="Tayyeb Vhora" />
        <meta name="shortcut icon" content="" />
        <title>Tayyeb Vhora's - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md">{children}</Container>
    </Box>
  );
}

export default Main;
