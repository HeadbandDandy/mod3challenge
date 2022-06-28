const characterAmountRange = document.getElementById
('characterAmountRange')

const characterAmountNumber = document.getElementById
('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const form = document.getElementById('passwordGeneratorForm')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols, InludeSpecialCharacters)

})
//  function above prevents page from refreshing each time password is generated. 
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