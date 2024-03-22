"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var himanshi = { name: "himanshi", id: 334 };
himanshi = { username: "hs", id: 334 };
// function getDbId(id:number | string){
//     console.log(`DB id is: ${id}`)
// }
// getDbId(3)
// getDbId("3")
function getDbId(id) {
    //   id.toLowerCase()  // error
    if (typeof id == "string") {
        id.toLowerCase();
    }
}
// array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", 2, 3, true];
