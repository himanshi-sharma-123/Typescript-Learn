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
// class User {
//   private _courseCount = 1;
//   readonly city: string = "Himanshi";
//   constructor(
//     public email: string,
//     public name: string // private userId: string
//   ) {}
//   private deleteToken() {
//     console.log("Token deleted");
//   }
//   get getAppleEmail(): string {
//     return `apple ${this.email}`;
//   }
//   get courseCount(): number {
//     return this._courseCount;
//   }
//   set courseCount(courseNum) {
//     if (courseNum <= 1) {
//       throw new Error("Couse count should be more than 1");
//     }
//     this._courseCount = courseNum;
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
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const himanshi = new User("him@gmail.com", "Himanshi");
// himanshi.city = "Delhi"; //error
// himanshi.deleteToken() // error
