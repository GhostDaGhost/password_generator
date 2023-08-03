import { Container, Progress } from '@mantine/core';

export const PasswordStrength = (props: PasswordStrength) => {
    let value = 0;
    let color = 'red';

    // GET PROGRESS VALUE AND COLOR
    const passwordLength = props.passwordlength;
    if (passwordLength <= 10) {
        value = 10;
        color = 'red';
    } else if (passwordLength > 10 && passwordLength <= 12) {
        value = 27;
        color = 'yellow';
    } else if (passwordLength > 12 && passwordLength <= 25) {
        value = 55;
        color = 'green';
    } else {
        value = 100;
        color = 'green';
    }

    // RETURN ELEMENT
    return (
        <Container id="passwordstrength_container" mt={15}>
            <Progress id="passwordstrength" color={color} value={value} />
        </Container>
    )
}
