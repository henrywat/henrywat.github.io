const fruits = ["Banana", "Orange", "Apple", "Mango"];
//console.table(fruits);
fruits.push("Strawberry"); // add to the end
fruits.unshift("Grapes") // add to the beginning
//console.table(fruits);
fruits.pop(); // remove from the end
fruits.shift(); // remove from the beginning
//console.table(fruits);

const fruits2 = ["Apple", "Orange", "Banana", "Mango", "Strawberry", "Grapes", "Watermelon", "Pineapple", "Kiwi", "Peach", "Pear", "Cherry"]
//fruits2.sort(); // sort alphabetically
//fruits2.sort(1); // sort alphabetically
//fruits2.sort(-1); // sort reverse alphabetically
//fruits2.sort(0); // sort reverse alphabetically
fruits2.sort((a, b) => a.length - b.length); // sort by length
//console.table(fruits2);

const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Phone', price: 800 },
    { id: 3, name: 'Tablet', price: 500 },
    { id: 4, name: 'Headphones', price: 150 },
    { id: 5, name: 'Camera', price: 950 },
    { id: 6, name: 'Smartwatch', price: 300 },
    { id: 7, name: 'Printer', price: 400 }
];

const expensiveProducts = []
for(let i = 0; i < products.length; i++) {
    if(products[i].price > 500) {
    expensiveProducts.push(products[i])
    }
}
//console.table(expensiveProducts);

const expensiveProducts2 = products.filter((product) => {
    return product.price > 500
    })
//console.table(expensiveProducts2);

console.table(products)
const onSaleProducts = []
for(let i = 0; i < products.length; i++) {
    onSaleProducts.push(products[i])
    onSaleProducts[i].discountedPrice = products[i].price * 0.9
    onSaleProducts[i].distrubuterPrice = products[i].price * 0.6
}
console.table(onSaleProducts);
console.table(products)

const onSaleProducts2 = products.map((product) => {
    return {
    ...product, // spread operator
    discountedPrice: product.price * 0.9
    }
})
console.table(onSaleProducts2);

//map() is also commonly used for extracting a specific data field
const productNames = products.map((product) => product.name);
console.table(productNames);

const totalValueOfProducts = products.reduce((totalValue, product) => {
    return totalValue + product.price
}, 0)
console.log(totalValueOfProducts);