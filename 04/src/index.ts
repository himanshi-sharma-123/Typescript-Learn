class User {
  email: string;
  name: string;
  readonly city: string = "Himanshi";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const himanshi = new User("him@gmail.com", "Himanshi");
// himanshi.city = "Delhi"; //error
