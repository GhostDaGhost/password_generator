import { useState } from 'preact/hooks';
import { Center, Container } from '@mantine/core';

import { GenerateNewPassword } from './controllers/generation';
import './styles/App.less';

import { Header } from './components/Header';
import { PasswordPreview } from './components/PasswordPreview';
import { GenerationOptions } from './components/GenerationOptions';
import { PasswordLength } from './components/PasswordLength';
import { GeneratePassword } from './components/GeneratePassword';

export const App = () => {
    const [generatedPassword, setGeneratedPassword] = useState('');
    const [desiredLength, setDesiredLength] = useState(15);
    const [generationSettings, setGenerationSettings] = useState<string[]>(['lowerCase']);

    // ON GENERATE PASSWORD CLICK, TRIGGER THE GENERATION CONTROLLER
    const onGeneratePasswordClick = () => {
        GenerateNewPassword(desiredLength, generationSettings, setGeneratedPassword);
    }

    // RETURN ELEMENT
    return (
        <Center id="outercontainer">
            <Container id="innercontainer">
                <Header />
                <PasswordPreview value={generatedPassword} />
                <PasswordLength value={desiredLength} onChange={setDesiredLength} />
                <GenerationOptions defaultValue={generationSettings} onChange={setGenerationSettings} />
                <GeneratePassword onClick={onGeneratePasswordClick} />
            </Container>
        </Center>
    )
}
