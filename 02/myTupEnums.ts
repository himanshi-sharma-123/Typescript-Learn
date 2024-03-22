// const user: (string | number)[] = ["hs",1]

let tUser: [string, number, boolean];

tUser = ["hs", 131, true];

// let rgb: [number,number,number] = [255,123,112,0.5]  //error more than 3 included

type User = [number, string];

const newUser: User = [112, "h@gmail.com"];

newUser[1] = "h@yahoo.com"; // issue value can be changed

export {};
