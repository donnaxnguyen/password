// these are the variables 
var passwordEl = document.querySelector("#password");
var btngenerateEl = document.querySelector("#generate");
var btncopyEl = document.querySelector("#copy");

// this creates a function for clicking on the button 

btngenerateEl.addEventListener("click", function () {

// this asks how many characters
var charLength = prompt("How many characters would you like your password to be? Pick a number between 8 and 128");

// program runs if its from 8 - 128
  if ((charLength >= 8) && (charLength <= 128)) {


// these are the criterias and prompts the user can choose from.
    let genSymbols = confirm("Do you want your password to have special characters?");
    let genNumbers = confirm("Do you want numbers in the password?");
    let genLowerCase = confirm("Would you like to use lowercase letters?");
    let genUpperCase = confirm("Would you also like to use uppercase letter?");

  
// these are the variables for the generator to use 
  let symbols = "!'#$%&()*+-./;:<>=?@[]{}~^";
  let numbers = "0123456789";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // this is a blank string for the generator
  let newPassword = "";


// this creates variables that will add all the new characters together
    var allCharacters = symbols + numbers + lowerCase + upperCase;
    var a = symbols + numbers + lowerCase;
    var b = symbols + numbers + upperCase;
    var c = symbols + lowerCase + upperCase;
    var d = numbers + lowerCase + upperCase;
    var e = symbols + numbers;
    var f = symbols + lowerCase;
    var g = symbols + upperCase;
    var h = numbers + lowerCase;
    var j = numbers + upperCase;
    var k = lowerCase + upperCase;

  // these are the if statements that will match and loop the password combos
   if ((genSymbols === true) && (genNumbers === true) && (genLowerCase === true) && (genUpperCase === true)) {
    for (i = 0; i < charLength; i++) {
        let character = Math.floor(Math.random() * allCharacters.length);
        newPassword += allCharacters.charAt(character, character + 1);
      }
    }
    else if ((genSymbols === true) && (genNumbers === true) && (genLowerCase === true) && (genUpperCase === false)) {
        for (i = 0; i < charLength; i++) {
            let character = Math.floor(Math.random() * a.length);
            newPassword += a.charAt(character, character + 1);
        }
    }
    else if ((genSymbols === true) && (genNumbers === true) && (genLowerCase === false) && (genUpperCase === true)) {
        for (i = 0; i < charLength; i++) {
            let character = Math.floor(Math.random() * b.length);
            newPassword += b.charAt(character, character + 1);
        }
    }
    else if ((genSymbols === true) && (genNumbers === false) && (genLowerCase === true) && (genUpperCase === true)) {
        for (i = 0; i < charLength; i++) {
            let character = Math.floor(Math.random() * c.length);
            newPassword += c.charAt(character, character + 1);
        }
    }
    else if ((genSymbols === false) && (genNumbers === true) && (genLowerCase === true) && (genUpperCase === true)) {
        for (i = 0; i < charLength; i++) {
            let character = Math.floor(Math.random() * d.length);
            newPassword += d.charAt(character, character + 1);
        }
    }
    else if ((genSymbols === true) && (genNumbers === true) && (genLowerCase === false) && (genUpperCase === false)) {
        for (i = 0; i < charLength; i++) {
            let character = Math.floor(Math.random() * e.length);
            newPassword += e.charAt(character, character + 1);
        }
    }
    else if ((genSymbols === true) && (genNumbers === false) && (genLowerCase === true) && (genUpperCase === false)) {
        for (i = 0; i < charLength; i++) {
            let character = Math.floor(Math.random() * f.length);
            newPassword += f.charAt(character, character + 1);
        }
    }
    else if ((genSymbols === true) && (genNumbers === false) && (genLowerCase === false) && (genUpperCase === true)) {
        for (i = 0; i < charLength; i++) {
            let character = Math.floor(Math.random() * g.length);
            newPassword += g.charAt(character, character + 1);
        }
    }
    else if ((genSymbols === false) && (genNumbers === true) && (genLowerCase === true) && (genUpperCase === false)) {
        for (i = 0; i < charLength; i++) {
            let character = Math.floor(Math.random() * h.length);
            newPassword += h.charAt(character, character + 1);
        }
    }
    else if ((genSymbols === false) && (genNumbers === true) && (genLowerCase === false) && (genUpperCase === true)) {
        for (i = 0; i < charLength; i++) {
            let character = Math.floor(Math.random() * j.length);
            newPassword += j.charAt(character, character + 1);
        }
    }
    else if ((genSymbols === false) && (genNumbers === false) && (genLowerCase === true) && (genUpperCase === true)) {
        for (i = 0; i < charLength; i++) {
            let character = Math.floor(Math.random() * k.length);
            newPassword += k.charAt(character, character + 1);
        }
    }
    else if ((genSymbols === true) && (genNumbers === false) && (genLowerCase === false) && (genUpperCase === false)) {
        for (i = 0; i < charLength; i++) {
            let character = Math.floor(Math.random() * symbols.length);
            newPassword += symbols.charAt(character, character + 1);
        }
    }
    else if ((genSymbols === false) && (genNumbers === true) && (genLowerCase === false) && (genUpperCase === false)) {
        for (i = 0; i < charLength; i++) {
            let character = Math.floor(Math.random() * numbers.length);
            newPassword += numbers.charAt(character, character + 1);
        }
    }
    else if ((genSymbols === false) && (genNumbers === false) && (genLowerCase === true) && (genUpperCase === false)) {
        for (i = 0; i < charLength; i++) {
            let character = Math.floor(Math.random() * lowerCase.length);
            newPassword += lowerCase.charAt(character, character + 1);
        }
    }
    else if ((genSymbols === false) && (genNumbers === false) && (genLowerCase === false) && (genUpperCase === true)) {
        for (i = 0; i < charLength; i++) {
            let character = Math.floor(Math.random() * a.length);
            newPassword += a.charAt(character, character + 1);
        }
    }
   
    
// this generates a new password into the text area
passwordEl.textContent = newPassword;
}

})

// this is the copy to clipboard button
btncopyEl.addEventListener("click", function () {
    passwordEl.select();
    document.execCommand("copy");
    alert("Copied your new password");
})