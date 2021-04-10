import { useUser } from "@auth0/nextjs-auth0";
import {
  Avatar,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navigation: React.FC = () => {
  const { user } = useUser();

  return (
    <Flex
      as="nav"
      justify="space-between"
      bg="teal.400"
      color="white"
      padding="1rem"
    >
      <Heading as="h2" size="lg">
        TypePractice
      </Heading>

      <Box>
        <NavLinks />
        {user ? <UserInfo user={user} /> : <LoginButton />}
      </Box>
    </Flex>
  );
};

const NavLinks: React.FC = () => {
  const links = [
    { title: "Game", href: "/game" },
    { title: "Scores", href: "/scores" },
    { title: "Texts", href: "/texts" },
  ];

  return (
    <>
      {links.map(({ href, title }) => (
        <Link href={href}>
          <Button variant="ghost" _hover={{ bg: "teal.500" }}>
            {title}
          </Button>
        </Link>
      ))}
    </>
  );
};

const LoginButton = () => {
  return (
    <Link href="/api/auth/login">
      <Button variant="ghost" _hover={{ bg: "teal.500" }}>
        Login
      </Button>
    </Link>
  );
};

const UserInfo = ({ user }) => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          variant="ghost"
          _hover={{ bg: "teal.500" }}
          _expanded={{ bg: "teal.500" }}
          leftIcon={<Avatar src={user.picture} size="sm" />}
          rightIcon={<ChevronDownIcon />}
        >
          <Text mx={2}>{user.given_name}</Text>
        </MenuButton>
        <MenuList>
          <Link href="/api/auth/logout">
            <MenuItem color="gray.800">Logout</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </>
  );
};

export default Navigation;
