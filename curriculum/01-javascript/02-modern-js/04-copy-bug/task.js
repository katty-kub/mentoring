// Bug report (hlášení chyby): Do košíku hosta přidám "tea".
// Pak je "tea" i v uloženém menu. Menu se měnit nemá. Oprav to.
// menu ["coffee", "cake"] → menu zůstane [ 'coffee', 'cake' ]

const menu = ["coffee", "cake"];

const guestCart = [...menu];
guestCart.push("tea");

console.log(menu);
console.log(guestCart);

// node task.js má vypsat:
// [ 'coffee', 'cake' ]
// [ 'coffee', 'cake', 'tea' ]
