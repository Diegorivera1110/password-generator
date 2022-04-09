// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

 var symbols = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", ",", ".", "/", ":", ";", "<", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

 var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// lengthPrompt will take in quantity user decides on 
var lengthPrompt = "";

// createdPassword will work as an array storing criteria choices
var randomCharacters = [];

var uppercaseCriteria;
var lowercaseCriteria;
var numbersCriteria;
var symmbolsCriteria;
// generatePassword will initiate when User clicks on "Generate Password"
function generatePassword() {
  console.log("Button worked");
  var lengthPrompt = prompt("Between 8 and 128 characters, how long would you like your password to be?");
  if (lengthPrompt == "" || lengthPrompt == null) {
    alert("Click 'Generate Password' again to reset the generator.");
    return;

  } 
  // this "while" will verify the user entered a valid quantity
  while (lengthPrompt < 8 || lengthPrompt > 128) {
    alert("Quantity entered must be between 8 and 128");
    var lengthPrompt = prompt("Between 8 and 128 characters, how long would you like your password to be?");
  }
  
  // Confirm character criteria
  var uppercaseCriteria = confirm("Would you like your password to have Uppercase Letters?");
  var lowercaseCriteria = confirm("Would you like your password to have Lowercase Letters?");
  var numbersCriteria = confirm("Would you like your password to have Numbers?");
  var symbolsCriteria = confirm("Would you like your password to have Symbols?");
 
  
  
  // if (uppercaseCriteria === false && lowercaseCriteria === false && numbersCriteria === false && symbolsCriteria === false) {
  //   alert("You have to at least agree to one of the prompted selections. Please try again.");
  // }  

  if (!uppercaseCriteria && !lowercaseCriteria && !numbersCriteria && !symbolsCriteria) {
    alert("Try again.");
    return false;
  }
  
  // Arrange selected criteria into the createdPassword array to be generated
  if (lowercaseCriteria) {
    randomCharacters = lowercaseCriteria.concat(lowerCase);
  }
  if (uppercaseCriteria) {
    randomCharacters = uppercaseCriteria.concat(upperCase);
  } 
  if (symbolsCriteria) {
    randomCharacters = symbolsCriteria.concat(symbols);
  } 
  if (numbersCriteria) {
    randomCharacters = numbersCriteria.concat(numbers);
  }
  
  // for (randomCharacters )
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 