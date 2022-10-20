const alphabet = 
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ÁÀÉÈÃÍÌÒÓÙÚáàéèíìóòúù";

function caesar(phrase: String) {
 let iterator = 0;
 let output = "";

 for (iterator; iterator < phrase.length; iterator++) {
  const letter = phrase[iterator];
  const index = alphabet.indexOf(letter);
  const newIndex = index + 3;

  if (letter === " ") output += letter;
  else output += alphabet[newIndex];
 }

 return output;
}

function init() {
  const [param] = process.argv.splice(2);

  try {
    const encoded = caesar(param);
    console.log(encoded);
  } catch (error) { console.log(error) };
}

init();
