import { characters } from "../data/consts";

// DEFAULT GENERATION SETTINGS
const defaultSettings: string[] = ['lowerCase'];

/**
    * A function that is triggered to generate a password based on desired length and certain parameters.
    * @param desiredLength `number`<default: 15> - The desired length of the password when randomized.
    * @param generationSettings `string[]` - The certain parameters that the user wants to have customized the password (lowercased, uppercased etc).
    * @param setGeneratedPassword `Function` - The function to set the generated password state so that it appears in the input box and can be copied.
    * @returns `void` - This returns nothing.
*/
export const GenerateNewPassword = (desiredLength: number = 15, generationSettings: string[] = defaultSettings, setGeneratedPassword: Function) => {
    if (!desiredLength || desiredLength <= 0) { // ALWAYS CAP MIN TO 1... FOR SOME REASON THE MANTINE SLIDER HATES THE MIN ATTRIBUTE AT THE MOMENT
        desiredLength = 1;
    }

    // SET DEFAULT SETTINGS IF NONE ARE TICKED TO PREVENT AN UNDEFINED OUTPUT
    if (!generationSettings.length || generationSettings.length <= 0) {
        generationSettings = defaultSettings;
    }

    // ITERATE THROUGH EACH GENERATION SETTING
    let staticPassword = '';
    let excludeDuplicate = false;

    generationSettings.forEach((setting: string) => {
        if (setting !== 'excludeDuplicate' && setting !== 'includeSpaces') {
            staticPassword += characters[setting];
        } else if (setting === 'includeSpaces') {
            staticPassword += `  ${staticPassword}  `;
        } else {
            excludeDuplicate = true;
        }
    });

    // RANDOMIZE THE STATIC INTO THE FINAL PASSWORD
    let randomPassword = '';
    for (let i = 0; i < desiredLength; i++) {
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if (excludeDuplicate) {
            !randomPassword.includes(randomChar) || randomChar === ' ' ? randomPassword += randomChar : i--;
        } else {
            randomPassword += randomChar;
        }
    }

    // UPDATE GENERATED PASSWORD STATE
    setGeneratedPassword(randomPassword);
}
