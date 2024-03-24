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
  readonly city: string = "Himanshi";
  constructor(
    public email: string,
    public name: string
  ) // private userId: string
  {}
}

const himanshi = new User("him@gmail.com", "Himanshi");
// himanshi.city = "Delhi"; //error
