const user = {
  name: "Himanshi",
  email: "himanshi@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newuser = { name: "himanshi", isPaid: false, emai: "h@gmail.com" };

createUser(newuser);
// createUser({ name: "himanshi", isPaid: false });

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

export {};
