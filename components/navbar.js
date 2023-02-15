import {
  useColorModeValue,
  Box,
  Container,
  Stack,
  Link,
} from "@chakra-ui/react";
import ThemeToggleButton from "./theme-toggle-button";

function LinkItem({ href, path, _target, children, ...props }) {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <Link
      p={2}
      bg={active ? "grassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
      _target={_target}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}

const Navbar = (props) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW={{ base: "container.md", sm: "container.sm" }}
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Stack
          direction={{ base: "column", md: "row", sm: "row" }}
          display={{ md: "flex", sm: "flex" }}
          width={{ base: "full", md: "auto", sm: "auto" }}
          align="center"
          justify="center"
          flexGrow={1}
          gap={{ base: 4, md: 2, sm: 2 }}
          mt={{ base: 4, md: 0, sm: 0 }}
        >
          <LinkItem href="#">#Home</LinkItem>
          <LinkItem href="#about">#About</LinkItem>
          <LinkItem href="#projects">#Projects</LinkItem>
          <LinkItem href="#contacts">#Contact</LinkItem>
          <ThemeToggleButton />
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
