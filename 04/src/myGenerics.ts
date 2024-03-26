const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(3); // these are advantage of using type over any
identityThree("3"); // these are advantage of using type over any

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: "a", type: 1 });

function getSearchProducts<T>(products: T[]): T {
  // do some databse operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 4;
  return products[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(3, { connection: "a", username: "h", password: "4" });

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(products: T) {
    this.cart.push(products);
  }
}
