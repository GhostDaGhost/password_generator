import { Text, Title, Container, Divider } from '@mantine/core';

export const Header = () => {
    return (
        <Container id="header_container">
            <Title order={2} color="white" align="center">Password Generator</Title>
            <Text color="gray" align="center">Created by Alexander Arizola</Text>

            <Divider mt={16} mb={16} opacity="18%" />
        </Container>
    )
}
