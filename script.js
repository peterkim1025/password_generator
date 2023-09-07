// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var passwordChar = "";
  var passwordNumberChar = "0123456789";
  var passwordSpecialChar = "!@#$%^&*()";
  var passwordCapitalChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLowerChar = "abcdefghijklmnopqrstuvwxyz";
  var finalPass = "";

  //start the generator
  var userLength = window.prompt("How many characters would you like your password to contain?");
  if (!userLength){return("Try generating a random password!");}
  if (userLength > 128 || userLength < 8){
    window.alert("Password must be larger than 8 and smaller than 128 characters");
    return("Try again!");
  }

  //number character
  var userNumber = window.confirm("Click OK to confirm including numeric characters");
  if (userNumber){
    passwordChar = passwordChar.concat(passwordNumberChar);
  }

  //special character
  var userSpecial = window.confirm("Click OK to confirm special characters");
  if (userSpecial){
    passwordChar = passwordChar.concat(passwordSpecialChar);
  }

  //capital character
  var userCapital = window.confirm("Click OK to confirm capital characters");
  if (userCapital){
    passwordChar = passwordChar.concat(passwordCapitalChar);
  }

  //lowercase  character
  var userLower = window.confirm("Click OK to confirm lowercase characters");
  if (userLower){
    passwordChar = passwordChar.concat(passwordLowerChar);
  }

  //generating password given prompts above
  for (var i = 0; i < userLength; i++) {
    var randomNumber = Math.floor(Math.random() * passwordChar.length);
    finalPass += passwordChar.substring(randomNumber, randomNumber +1);
  }
  return finalPass;
}