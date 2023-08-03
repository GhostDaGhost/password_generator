import { Container, Slider } from '@mantine/core';

export const PasswordLength = (props: PasswordLength) => {
    return (
        <Container id="passwordlength_container">
            <Slider color="cyan" defaultValue={props.value} max="30" onChange={props.onChange} />
        </Container>
    )
}
