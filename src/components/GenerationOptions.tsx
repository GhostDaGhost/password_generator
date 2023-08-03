import { Container, Group, Switch } from '@mantine/core';

export const GenerationOptions = (props: GenerationOptions) => {
    return (
        <Container id="generationoptions_container" mt={15} mb={15}>
            <Switch.Group defaultValue={props.defaultValue} description="Generation Settings" onChange={props.onChange}>
                <Group mt={18}>
                    <Switch color="cyan" value="lowerCase" label="Lowercase (a-z)" />
                    <Switch color="cyan" value="upperCase" label="Uppercase (A-Z)" />
                </Group>

                <Group mt={20}>
                    <Switch color="cyan" value="includeNumbers" label="Numbers (0-9)" />
                    <Switch color="cyan" value="includeSymbols" label="Symbols (!-$^+)" />
                </Group>

                <Group mt={20}>
                    <Switch color="cyan" value="excludeDuplicate" label="Exclude Duplicate" />
                    <Switch color="cyan" value="includeSpaces" label="Include Spaces" />
                </Group>
            </Switch.Group>
        </Container>
    )
}
