// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function passwordPropmts() {


    //vars definition
    var length;
    var lowercase = false;
    var uppercase = false;
    var numeric = false;
    var specialCharacters = false;

    //arrays
    var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ];
    var userOptionalCharacters = [];

     //promt for length

    //if length is NOT greated than 8 and less than 128
      //alert (must have password betweek 8 and 128 characters)

    //confirm: lowercase charaters, 
    //confirm: uppercase charaters,
    //confirm: numeric charaters,
    //confirm: special charaters,

     //check if at least one is chosen by the user is true


      //generate password;
      //alert password;
      //return password;
}

function generatePassword(){

}

      //write password to the #password input
  function writePassword(){
      console.log("im inside writePassword");
   
    var password = passwordPropmts();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
