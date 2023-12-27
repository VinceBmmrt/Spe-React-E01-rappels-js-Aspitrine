// Déclaration de variable
let age = 12;
// avec const, on ne peut pas réassigner une valeur
const name = 'John';

const user = {
  name: 'John',
  age: 12,
}

// let permet de réaffecter / réassigner une valeur
age = 13;

// Je peut modifier les propriétés d'un objet même si c'est une constante
user.name = 'Jane';

// Template string => permet de concaténer (mettre bout à bout) des variables et du texte
const helloText = `Hello ${user.name}`;

// Les tableaux
const fruits = ['pomme', 'banane', 'poire'];
fruits.push('fraise'); // Ajoute un élément à la fin du tableau

for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for of qui permet de boucler sur un tableau et de récupérer la valeur directement
for(const fruit of fruits) {
  console.log(fruit);
}

// Le for in permet de boucler sur les propriétés d'un objet
for(const userKey in user) {
  // pour récupérer la valeur
  console.log(`la clé ${userKey} à pour valeur ${user.userKey}`)
}

// Les fonctions
function sayHello(name) {
  console.log(`Hello ${name}`);
}

function getUserName(user) {
  return user.name;
}

function somme(num1, num2) {
  return num1 + num2;
}

// Les fonctions fléchées
// C'est une fonction anonyme que l'on stock dans une variable
const arrowSayHello = (name) => {
  console.log(`Hello ${name}`);
}

// Ici il y a un retour implicite, si on ne met pas les `{}`, on retourne directement la valeur
const arrowGetUserName = (user) => user.name
// Équivaut à
// const arrowGetUserName = (user) => {
//   return user.name
// }

// Une fonction qui prend un paramètre pour afficher le contenu
const showFruit = (fruit) => {
  console.log(fruit)
}

// un argument, c'est la valeur qui est passé lors de l'exécution de la fonction
showFruit('pomme')

// une fonction de callback est une fonction passée en argument
// pour chaque élément du tableau, la fonction passé en argument sera exécutée
fruits.forEach((fruit) => {
  console.log(fruit)
})

fruits.forEach(showFruit)

// find permet de trouver un élément dans un tableau
// Il retourne le première élément trouvé (dont la fonction de callback retourne true)
const monFruitTrouve = fruits.find((fruit) => {
  return fruit === 'pomme'
})

// filter permet de filtrer un tableau
// Il retourne tous les éléments (un tableau) trouvé (dont la fonction de callback retourne true)
const monFruitTrouve = fruits.filter((fruit) => {
  return fruit.length > 5
})

// map permet de transformer un tableau en un autre tableau
// Pour chaque fruit, je vais le retourner en majuscule
const fruitsUpperCase = fruits.map((fruit) => {
  return fruit.toUpperCase()
})

const fruitsUpperCase = fruits.map((fruit) => {
  return `<li>${fruit}</li>`
})
