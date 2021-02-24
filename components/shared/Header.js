import Flex from '@chakra-ui/core/dist/Flex';
import Heading from '@chakra-ui/core/dist/Heading';
import React, { useContext } from 'react';
import authContext from '../../context/auth/authContext';

const Header = props => {
    const { token } = useContext(authContext);
    const isLoggedIn = !!token;
    return (
        <Flex as="nav" justify="space-between" bg="teal.400" color="white" padding="1rem">
            <Heading as="h2" size="lg">
                TypePractice
            </Heading>
            {
                isLoggedIn
                    ? <h1>Name</h1>
                    : <a>Login</a>
            }
        </Flex>
    );
}

export default Header;
