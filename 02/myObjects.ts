// const user = {
//   name: "Himanshi",
//   email: "himanshi@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newuser = { name: "himanshi", isPaid: false, emai: "h@gmail.com" };

// createUser(newuser);
// // createUser({ name: "himanshi", isPaid: false });

// function createCourse(): { name: string; price: number } {
//   return { name: "reactjs", price: 399 };
// }

/////// type aliases

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// type Mystring = string;

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

///////// READONLY ////////

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number; //optional
};

let myUser: User = {
  _id: "12345",
  name: "h",
  email: "h@.com",
  isActive: false,
};

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "h@gmail.com";
// myUser._id = "333"  // error

export {};
