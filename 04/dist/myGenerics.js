"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(3); // these are advantage of using type over any
identityThree("3"); // these are advantage of using type over any
function identityFour(val) {
    return val;
}
identityFour({ brand: "a", type: 1 });
function getSearchProducts(products) {
    // do some databse operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction(3, { connection: "a", username: "h", password: "4" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
