// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// generatePassword will initiate when User clicks on "Generate Password"
function generatePassword() {
  console.log("Button worked");
  
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
   var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
   var symbols = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", ",", ".", "/", ":", ";", "<", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  
   var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
   
   var uppercaseCriteria;
   var lowercaseCriteria;
   var numbersCriteria;
   var symbolsCriteria;
   
   // lengthPrompt will take in quantity user decides on 
   var lengthPrompt = ""
   
   // The presented password
   var createdPassword = ""
   // END variable collection
   
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
        alert("You have to at least agree to one of the prompted selections. Please try again.");
        return false;
      }

      // randomCharacters will work as an array storing criteria choices made by the user
      var randomCharacters = []
      
  // Arrange selected criteria into the createdPassword array to be generated
  if (lowercaseCriteria) {
    randomCharacters = randomCharacters.concat(lowerCase);
  }
  if (uppercaseCriteria) {
    randomCharacters = randomCharacters.concat(upperCase);
  } 
  if (symbolsCriteria) {
    randomCharacters = randomCharacters.concat(symbols);
  } 
  if (numbersCriteria) {
    randomCharacters = randomCharacters.concat(numbers);
  }
  
   for (var i = 0; i < lengthPrompt; i++) {
    createdPassword = createdPassword + randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
  }
  return createdPassword;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 