// Predict (předpověz): jaký type (typ) vrací každá function (funkce)? Napiš tip ke každé.
// Pak najeď myší na jméno funkce ve VS Code a porovnej.
// const shout = (word: string) => { return word + "!"; }; → string

const double = (n: number) => {
  return n * 2;
};
// tip:

const isAdult = (age: number) => {
  return age >= 18;
};
// tip:

const greet = (name: string) => {
  return "Hi " + name;
};
// tip:

const cleanPhone = (phone: string) => {
  if (phone === "") {
    return undefined;
  }
  return phone.trim();
};
// tip:

console.log(double(2), isAdult(20), greet("Eva"), cleanPhone(""));
