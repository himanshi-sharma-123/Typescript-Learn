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
