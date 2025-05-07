let myNumbers = [1, 2, 3, 4, 5];

let total = myNumbers.reduce(function(acc, curVal){
    return acc + curVal
} , 0)
console.log(total);



// --------------------------------------------------- A Real World Example ----------------------------------------------

let shoppingCart = [
    {
        Product: "STRIFF Adjustable Laptop Tabletop Stand Patented Riser Ventilated Portable Foldable Compatible with MacBook Notebook Tablet Tray Desk Table Book with Free Phone Stand (Black)",
        Price: 229
    } ,
    {
        Product: "Beyond Cracking the Coding Interview: Pass Tough Coding Interviews, Get Noticed, and Negotiate Successfully (Cracking the Interview & Career) (Grayscale Indian Edition)",
        Price: 1500
    } ,
    {
        Product: "Head First Java: A Brain-Friendly Guide, Third Edition (Grayscale Indian Edition)",
        Price: 1850
    },
    {
        Product: "Around the World in 80 Days : Illustrated abridged Classics (Om Illustrated Classics) ",
        Price: 206
    }
];

let GrandTotal = shoppingCart.reduce((acc , item) => (acc + item.Price), 0);

console.log(GrandTotal);


// Documentation   => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
