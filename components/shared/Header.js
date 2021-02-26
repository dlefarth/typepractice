import { useUser } from '@auth0/nextjs-auth0';
import { Avatar, Button, Link, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/core';
import Flex from '@chakra-ui/core/dist/Flex';
import Heading from '@chakra-ui/core/dist/Heading';
import React from 'react';

const Header = () => {
    const { user } = useUser();

    return (
        <Flex as="nav" justify="space-between" bg="teal.400" color="white" padding="1rem">
            <Heading as="h2" size="lg">
                TypePractice
            </Heading>
            {
                user
                    ? <UserInfo user={user} />
                    : <LoginButton />
            }
        </Flex>
    );
}

const LoginButton = () => {
    return (
        <Link href="/api/auth/login">
            <Button variant="ghost" _hover={{ bg: 'teal.500' }}> Login </Button>
        </Link>
    );
};

const UserInfo = ({ user }) => {
    return <>
        <Menu>
            <MenuButton as={Button} variant="ghost" _hover={{ bg: 'teal.500' }}>
                <Avatar src={user.picture} size="sm" />
                <Text mx={2}>{user.given_name}</Text>
            </MenuButton>
            <MenuList>
                <Link href="/api/auth/logout">
                    <MenuItem color="gray.800">
                        Logout
                    </MenuItem>
                </Link>
            </MenuList>
        </Menu>
    </>;
}

export default Header;
