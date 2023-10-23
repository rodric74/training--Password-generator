const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNBumbers = "0123456789";
const dataSymbols = '&é(§è!ç"à$`£@#!?';
const rangeValue = document.getElementById("password-length");

const generatePassword = () => {
  let data = [];

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNBumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Séléctionnez des critères");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    console.log(data[Math.floor(Math.random() * data.length)]);
  }
};

generateButton.addEventListener("click", generatePassword);
