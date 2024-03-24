"use strict";
// class User {
//   public email: string;
//   name: string;
//   private readonly city: string = "Himanshi";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name // private userId: string
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Himanshi";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Couse count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const himanshi = new User("him@gmail.com", "Himanshi");
// himanshi.city = "Delhi"; //error
// himanshi.deleteToken() // error
