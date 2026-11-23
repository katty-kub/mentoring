// Predict (předpověz): jaký type (typ) vrací každá function (funkce)? Napiš tip ke každé.
// Pak najeď myší na jméno funkce ve VS Code a porovnej.
// const shout = (word: string) => { return word + "!"; }; → string

const double = (n: number) => {
  return n * 2;
};
// tip: number

const isAdult = (age: number) => {
  return age >= 18;
};
// tip: boolean

const greet = (name: string) => {
  return "Hi " + name;
};
// tip: string

const cleanPhone = (phone: string) => {
  if (phone === "") {
    return undefined;
  }
  return phone.trim();
};
// tip: string | undefined

console.log(double(2), isAdult(20), greet("Eva"), cleanPhone(""));
