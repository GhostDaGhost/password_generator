import { Center, Button } from '@mantine/core';

export const GeneratePassword = (props: GeneratePassword) => {
    return (
        <Center id="generatepasswordbutton_container" mt={30} mb={11}>
            <Button
                id="generatepasswordbutton"
                color="green"
                sx={{transition: '.15s'}}
                onClick={props.onClick}
            >
                Generate Password
            </Button>
        </Center>
    )
}
