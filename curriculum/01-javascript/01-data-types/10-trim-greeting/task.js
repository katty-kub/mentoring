// Print a greeting. Remove the spaces around the name first.
// "  Ada  " → Hi Ada!

const name = "  Ada  ";

// your code


const sayHello = () => {
  const cleanName = name.trim();
  console.log(`Hi ${cleanName}!`);
};

sayHello();

// node task.js should print: Hi Ada!
