import { Container, Divider, TextInput, Tooltip } from '@mantine/core';
import { PasswordStrength } from './PasswordStrength';
import { IconCopy } from '@tabler/icons-react';

import '../styles/PasswordPreview.less';

export const PasswordPreview = (props: PasswordPreview) => {
    const CopyPasswordToClipboard = () => {
        navigator.clipboard.writeText(props.value ?? '');
    }

    // RETURN ELEMENT
    return (
        <Container id="passwordpreview_container" mb={6}>
            <TextInput
                id="passwordpreview"
                placeholder="Generate the password to see it!"
                value={props.value}
                readonly
                rightSection={
                    <Tooltip label="Copy" withArrow>
                        <IconCopy id="passwordpreview_copy" onClick={CopyPasswordToClipboard} color="white" size="1.35rem" />
                    </Tooltip>
                }
            />

            <PasswordStrength passwordlength={props.value.length} />

            <Divider mt={16} mb={16} opacity="18%" />
        </Container>
    )
}
