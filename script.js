var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";


//  beginning instructions

window.onload = alert("Welcome! Please click 'Generate password' to start!");

// Main function = Password Generation

function generatePassword() {
 var allChars = [];
 var resultPass = "";

// Set dynamic variables

 var Totlength = prompt("How many characters would you like your password to be?");

 if(Totlength <8 || Totlength > 128){
     alert("It is recommended to have a password between 8 and 128 characters long.");
 }

// Confirm the rest of character conditions
 
 else{
     if(confirm("Would you like your password to contain upper case letters?")){
         Array.prototype.push.apply(allChars, alphaUpper);
     }

     if(confirm("Would you like your password to contain lower case letters?")){
         Array.prototype.push.apply(allChars, alphaLower);
     }

     if(confirm("Would you like your password to contain numbers?")){
         Array.prototype.push.apply(allChars, number);
     }

     if(confirm("Would you like your password to contain symbols?")){
         Array.prototype.push.apply(allChars, symbol);
     }

     if(allChars.length===0){
         alert("You must select at lease 1 type of characters to generate a password!");
     }

// Run for loop to use confirmed information and generate password as a result

     else{
         for(var i=0; i<Totlength; i++){
             var random = Math.floor(Math.random()*allChars.length);
             resultPass += allChars[random];
         }
     }
     

// Display the result

     document.getElementById("password").innerHTML = resultPass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = result;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}