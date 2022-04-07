// Assignment code here


 // Main password generating function
  

// // Password length criteria 


// Character type confirmation


// When all prompts are answered the password is then generated

 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

 var symbols = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", ",", ".", "/", ":", ";", "<", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

 var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var lengthPrompt = "";

function generatePassword() {
  console.log("Button worked");
  var lengthPrompt = window.prompt("Between 8 and 128 characters, how long would you like your password to be?");
  if (lengthPrompt == "" || lengthPrompt == null) {
    alert("Click to reset this.");
    return;
  } while (lengthPrompt <= 8 || lengthPrompt >= 128) {
    window.alert("Quantity entered must be between 8 and 128");
    var lengthPrompt = window.prompt("Between 8 and 128 characters, how long would you like your password to be?");
  }
  
  var uppercaseCriteria;
  var lowercaseCriteria;
  var numbersCriteria;
  var symmbolsCriteria;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

