# Password generator
Allows you to generate password with customs parameters

# Usage
```
    const {randomPassword} = require('custom-password-generator');

    // Generate basic password
    console.log(`Password : ${randomPassword()}`);

    // Expected :
    > Password : l0x;'m1blmc!
    // Note : this is an example, passwords are generated dynamically
```

# Parameters
```
randomPassword({
    length: 10, // Number : length of the password
    useNumbers: false, // Boolean : put numbers on the password
    useLetters: {
        lowercase: false, // Boolean : use lowercase letters
        uppercase: true // Boolean : use uppercase letters
    }, // False or object with lowercase and uppercase
    useSymbols: true // Boolean : put symbols in the password
})
```
Note : parameters are optionals, if you want just to don't use letters, you don't have to write the entire object, just write :
```
randomPassword({
    useLetters: false
})
```

Warning : If you want to don't use lowercase, you have to set uppercase property on true :
```
randomPassword({
    useLetters: {
        lowercase: false,
        uppercase: true
    }
})
```

Hope it will helps you ! Damien