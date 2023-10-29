  // Practice exercise 3.1


let arrShop = [ "Milk", "Bread", "Apples" ];

console.log(arrShop);

console.log("length of arrShop: ", arrShop.length);


// Step 3: Update "Bread" to "Bananas"
let indexOfBread =  arrShop.indexOf("Bread");
if (indexOfBread !== -1) {
    arrShop[indexOfBread] = "Bananas";
}

console.log("Updated  arrShop: " +  arrShop);



// // Practice exercise 3.2


let shoppingList = [];

shoppingList.push("Milk", "Bread", "Apples");

const breadIndex = shoppingList.indexOf("Bread");
if (breadIndex !== -1) {
  shoppingList.splice(breadIndex, 1, "Bananas", "Eggs");
}


const removedItem = shoppingList.pop();
console.log("Removed item:", removedItem);

shoppingList.sort();

const milkIndex = shoppingList.indexOf("Milk");
console.log("Index of Milk:", milkIndex);
const bananasIndex = shoppingList.indexOf("Bananas");
if (bananasIndex !== -1) {
  shoppingList.splice(bananasIndex + 1, 0, "Carrots", "Lettuce");
}


const newList = ["Juice", "Pop"];

shoppingList = shoppingList.concat(newList, newList);


const lastIndexPop = shoppingList.lastIndexOf("Pop");
console.log("Last index of Pop:", lastIndexPop);

// 11. Your final list should look like this:
// ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", "Pop", "Juice", "Pop"]
console.log(shoppingList);

// Practice exercise 3.3


const originalArray = [1, 2, 3];


const nestedArray = [originalArray, originalArray, originalArray];


console.log(nestedArray[1][1]);

// Practice exercise 3.5

const people = {
  friends: []
};


const friends1 = {
  firstName: 'Maria',
  lastName: 'Arfeen',
  Id: 1266
};
  
const friends2 = {
  firstName: 'Aniqa',
  lastName: 'Sohail',
  Id: 1267
};


const friends3 = {
  firstName: 'Asia',
  lastName: 'Shahid',
  Id: 1268
};


people.friends.push(friends1, friends2, friends3 );

console.log(people);
