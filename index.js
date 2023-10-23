const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNBumbers = "0123456789";
const dataSymbols = '&é(§è!ç"à$`£@#!?';
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");
// console.log(passwordOutput);

const generatePassword = () => {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNBumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Séléctionnez des critères");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    // console.log(password);
  }
  passwordOutput.value = password;
  passwordOutput.select();

  passwordOutput.select();
  navigator.clipboard.writeText(passwordOutput.value);

  generateButton.textContent = "Copié";
  setTimeout(() => {
    generateButton.textContent = "Générer un nouveau mot de passe!";
  }, 2500);
};

generateButton.addEventListener("click", generatePassword);
