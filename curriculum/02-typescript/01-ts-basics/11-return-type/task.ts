// Predict (předpověz): jaký type (typ) vrací každá function (funkce)? Napiš tip ke každé.
// Pak najeď myší na jméno funkce ve VS Code a porovnej.
// function shout(word: string) { return word + "!"; } → string

function double(n: number) {
  return n * 2;
}
// tip:

function isAdult(age: number) {
  return age >= 18;
}
// tip:

function greet(name: string) {
  return "Hi " + name;
}
// tip:

function cleanPhone(phone: string) {
  if (phone === "") {
    return undefined;
  }
  return phone.trim();
}
// tip:

console.log(double(2), isAdult(20), greet("Eva"), cleanPhone(""));
