// Get relevant DOM elements
const passwordLength = document.getElementById('password__length');
const capitalLetters = document.getElementById('capital__letter');
const smallLetters = document.getElementById('small__letter');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const copy = document.querySelector('.copy__image');
const btn = document.querySelector('.generate__btn');
const lengthSpan = document.querySelector('.password__entered__length');
const myPassword = document.querySelector('.password span');

// Available character sets
const allCapitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allSmallLetters = "abcdefghijklmnopqrstuvwxyz";
const allNumbers = "0123456789";
const allSymbols = "!@#$%^&*()-_=+;|:',./<>?";

// Initialize the password length display
lengthSpan.textContent = passwordLength.value;

// Update password length display on input change
passwordLength.addEventListener('input', () => {
    lengthSpan.textContent = passwordLength.value;
});

// Generate password when the "Generate Password" button is clicked
btn.addEventListener('click', () => {
    myPassword.textContent = generatePassword();
});

// Function to generate the password
function generatePassword() {
    const length = passwordLength.value;
    let characters = "";
    let password = "";

    // Include selected character sets
    characters += capitalLetters.checked ? allCapitalLetters : "";
    characters += smallLetters.checked ? allSmallLetters : "";
    characters += numbers.checked ? allNumbers : "";
    characters += symbols.checked ? allSymbols : "";

    // Generate password using the selected characters
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

// Copy password to clipboard when the copy icon is clicked
copy.addEventListener('click', () => {
    if (myPassword.textContent !== "") {
        navigator.clipboard.writeText(myPassword.textContent);
    }
});
