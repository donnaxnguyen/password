// these are the variables 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// these are the special characters
character = ["!", "@", "#", "$", "%", "&", "*", "+", "-", "=", "?","~", "^", ">", "<"];


// these are the numeric characters
number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// these are the alphabet characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h",
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
"s", "t", "u", "v", "w", "x", "y", "z"];

// space is for the uppercase conversion
space = [];

// this allows the choices to be declared
var choices; 

// this converts the letters to uppercase
var toUpper = function(x) {
    returrn .toUpperCase();
};

// this creates the "alpha" variable an uppercase conversion
alpha2 = alpha.map(toUpper);

// this is the assignment code that was given
var get = document.querySelector("generate");

// when user clicks, this generates password 
get.addEventListener("click", function() {
    ps = generatePassword();
    document.getElementById("password").placeholder=ps;

});

// this function is to generate the password
function generatePassword() {
    // this is the prompt that will pop up and this also asks for the user to input their preferred number of characters
        // the parseInt is to have whole integers
  enter = parseIntprompt("How many characters would you like your password to be? Choose between 8 - 100")

  // this is the if statement for validation --> if user doesn't put in anything, this alert will pop up :-)
  if (!enter) {
    alert ("This needs a value");
  }
  else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose between 8 and 100 >:O"));
    // this validates the user input and also has a reply

  } else {
    // this will only continue if the users input is valid
      confirmNumber = confirm("Will this have numbers?");
      confirmCharacter = confirm("Will this have special characters?");
      confirmUppercase = confirm("Will this have uppercase letters?");
      confirmLowercase = confirm("Will this have lowercase letters?")
};

  // this is an "if" and this will pop up for four negative options 
    // if user does not "ok" character, number, uppercase, or lowercase...
  if (!confirmCharacter && confirmNumber && !confirmUppercase && !confirmLowercase) {
    // ... then an alert will pop up!
      choices = alert("You have to choose a criteria for your passsword!")

  }

  // this is an "else if" for four positive options
  // this means if user chooses their criteria, the input will determine the choices
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
          choices = character.concat(number, alpha, alpha2);
  // the concat string helps combine more than one strings and the alpha generates the value range
          // this will create randomized character with number, lowercase letter, and uppercase letter
  }



  // this is an "else if" for three positive options
  // this means if user only chooses three criteria
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
          choices = character.concat(number, alpha2);
          // this creates character with number and uppercase letter
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
          choices = character.concat(number, alpha);
          // this creates character with number and lowercase letter
  }

  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
          choices = character.concat(alpha, alpha2);
          // this creates character with lowercase and uppercase letter
  }

  else if (confirmNumber && confirmLowercase && confirmUppercase) {
          choices = number.concat(alpha, alpha2);
          // this creates number with lowercase and uppercase letter

  }
  

  // this is an "else if" for 2 positive options 
  // this means if user only chooses two criteria 
  else if (confirmCharacter && confirmNumber) {
        choices = number.concat(number);

  }

  else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);

}

  else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

}
  
  else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

}

  else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

}

  else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);

}

// "else if" for only one positive option 
// this means if user only chooses one criteria

else if (confirmCharacter) {
    choices = character;
}

else if (confirmNumber) {
    choices = number;
}

else if (confirmLowercase) {
    choices = alpha;

}

// this is the space variable from earlier for uppercase conversion

else if (confirmUppercase) {
    choices = space.concat(alpha2);
};

// this is an array placeholder for the generated password length
var password = [];

// this randomly picks the variables, math floor and math random randomly chooses the variables and returns it back as a whole integer
// the choices.length is the amount of variables will be outputed based on the users value choice
for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);

}

// this joins the password and arrays together
var ps = password.join("");
UserInput(ps);
return ps;
}

// this puts the password into the box
function UserInput(ps) {
document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
copyPassword();
});

// this gives user the option to copy the password
function copyPassword() {
document.getElementById("password").select();
document.execCommand("Copy");
alert("Password copied to clipboard!");
}

