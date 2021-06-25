const {randomPassword} = require('../index');

describe('Check passwords', () => {
    it('Basic is correct', () => {
        const regex = /([A-Z]|[a-z]|[0-9]|[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]){12}/;
        expect(regex.test(randomPassword())).toBe(true)
    })

    it('Has got correct length', () => {
        const regex = /([A-Z]|[a-z]|[0-9]|[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]){14}/;
        expect(regex.test(randomPassword({
            length: 14
        }))).toBe(true)
    })

    it('Has no number', () => {
        const regex = /([A-Z]|[a-z]|[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]){12}/;
        expect(regex.test(randomPassword({
            useNumbers: false
        }))).toBe(true)
    })

    it('Has no letters', () => {
        const regex = /([0-9]|[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]){12}/;
        expect(regex.test(randomPassword({
            useLetters: false
        }))).toBe(true)
    })

    it('Has no symbols', () => {
        const regex = /([A-Z]|[a-z]|[0-9]){12}/;
        expect(regex.test(randomPassword({
            useSymbols: false
        }))).toBe(true)
    })

    it('Has no lowercase', () => {
        const regex = /([A-Z]|[0-9]|[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]){12}/;
        expect(regex.test(randomPassword({
            useLetters: {
                lowercase: false
            }
        }))).toBe(true)
    })

    it('Has no uppercase', () => {
        const regex = /([a-z]|[0-9]|[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]){12}/;
        expect(regex.test(randomPassword({
            useLetters: {
                lowercase: true,
                uppercase: false
            }
        }))).toBe(true)
    })
})