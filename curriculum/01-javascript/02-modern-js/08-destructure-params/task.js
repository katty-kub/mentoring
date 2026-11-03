// Uprav printUser, ať v ní nikde není `.name` ani `.city`. Výstup se nezmění.

const printUser = (user) => {
  console.log(`${user.name} (${user.city})`);
  console.log(`Hi ${user.name}!`);
};

printUser({ name: "Eva", city: "Brno" });
printUser({ name: "Petr", city: "Ostrava" });

// node task.js má vypsat:
// Eva (Brno)
// Hi Eva!
// Petr (Ostrava)
// Hi Petr!
