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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Himanshi";
    }
}
const himanshi = new User("him@gmail.com", "Himanshi");
// himanshi.city = "Delhi"; //error
