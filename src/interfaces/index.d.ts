interface PasswordPreview {
    value: string;
}

interface PasswordStrength {
    passwordlength: number;
}

interface GeneratePassword {
    onClick: Function;
}

interface PasswordLength {
    value: number;
    onChange: Function;
}

interface GenerationOptions {
    defaultValue: string[];
    onChange: Function;
}
