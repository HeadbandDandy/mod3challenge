const characterAmountRange = document.getElementById
('characterAmountRange')

const characterAmountNumber = document.getElementById
('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')

const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const includeSpecialCharactersElement = document.getElementById('includeSpecialCharacters')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

//constants above allow changes between what the password includes...numbers/symbols/specialcharacters.

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

// above makes the Listener API look for data from inputs by the amount number and range

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const includeSpecialCharacters = includeSpecialCharactersElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols, includeSpecialCharacters)
    passwordDisplay.innerText = password
})
//  function above prevents page from refreshing each time password is generated. 

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh (48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64))
const SPECIAL_CHAR_CODES = arrayFromLowToHigh(91, 96).concat(arrayFromLowToHigh(123, 126))

// constants above provide arrays for the password to generate characters from. 

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols, includeSpecialCharacters) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (includeSpecialCharacters) charCodes = charCodes.concat(SPECIAL_CHAR_CODES)
    if (includeSymbols) charCodes= charCodes.concat(SYMBOL_CHAR_CODES)
    
    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

// function above pulls characters fro ASCII character sheets

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i<= high; i++) {
        array.push(i)
    }
    return array
}  
// loop above allows the character selection at a wide range rather than inserting characters into individual strings


function syncCharacterAmount(e) {
    const value = e.target.value 
    characterAmountNumber.value = value
    characterAmountRange.value = value 
}

// Assignment code here


// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword); 