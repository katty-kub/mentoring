// Uprav printUser, ať v ní nikde není `.name` ani `.city`. Výstup se nezmění.

const printUser = ({ name, city }) => {
  console.log(`${name} (${city})`);
  console.log(`Hi ${name}!`);
};

printUser({ name: "Eva", city: "Brno" });
printUser({ name: "Petr", city: "Ostrava" });

// node task.js má vypsat:
// Eva (Brno)
// Hi Eva!
// Petr (Ostrava)
// Hi Petr!

/*
Zápis ({ name, city }) znamená: „Funkce dostane objekt a hned z něj vybere vlastnosti name a city.“ Uvnitř funkce je pak můžu použít přímo jako proměnné name a city.
const printUser = ({ name, city }) => {
  console.log(name);
  console.log(city);
};

Objekt, který předávám při volání printUser(...), zůstává stejný. Jen si funkce hodnoty z něj vezme rovnou do samostatných proměnných.

Když zavolám printUser({ name: "Ada" }), chybějící city bude mít hodnotu undefined, takže se vypíše Ada (undefined) a Hi Ada!. Aby se místo toho zobrazil otazník, nastavím při rozbalování parametru výchozí hodnotu city = "?". Když do objektu přidám další vlastnost, například age, funkce se nerozbije. Jednoduše ji ignoruje, protože používá jen name a city.
*/
