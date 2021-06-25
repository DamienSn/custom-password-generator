/**
 * Random a password
 * @param {Object} params parameters
 * @param {number} params.length Length of the password
 * @param {boolean} params.useNumbers Use numbers in the password
 * @param {Object | boolean} params.useLetters Use letters in the password
 * @param {boolean} params.useLetters.lowercase Use lowercase
 * @param {boolean} params.useLetters.uppercase Use uppercase
 * @param {boolean} params.useSymbols Use symbols in the password
 * @returns password
 */
exports.randomPassword =  (
    {
        length = 12,
        useNumbers = true,
        useLetters = {
            lowercase: true,
            uppercase: true
        },
        useSymbols = true
    } = {}
    ) => {
    let final = [];
    let allChars = [];
    const symbols = ['!', '$', '%', '^', '&', '*','(', ')', '_', '+', '|', '~','-', '=', '`', '{', '}', '[',']', ':', '"', ';', "'", '<','>', '?', ',', '.', '/']
    const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const uppercase = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X','Y', 'Z'];
    const numbers = ['0', '1', '2', '3','4', '5', '6', '7','8', '9'];

    useNumbers ? allChars.push(...numbers) : allChars;
    if (useLetters) {
        if (useLetters.lowercase) {
            allChars.push(...lowercase);
        }
        if (useLetters.uppercase) {
            allChars.push(...uppercase);
        }
    }
    useSymbols ? allChars.push(...symbols) : allChars;

    for (let i=0; i<length; i++) {
        final.push(allChars[randomNumber(allChars.length)]);
    }
    return final.join('');
}

function randomNumber (range) {
    return Math.floor(Math.random() * range);
}

console.log(this.randomPassword({length: 14}))