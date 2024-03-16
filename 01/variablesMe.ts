let greetings: string = "Hello Himanshi";
console.log(greetings);

// number
// let userId: number = 334455.3;

let userId = 334455.3;
userId.toFixed();
//typescript is smart enough to get all the values
//boolean
let isLoggendIn: boolean = false;

//any
// let hero;//(don't know what will come under into this it maybe number string so it will become any)
let hero: string;
function getHero() {
  return "thor";
}

hero = getHero();

export {};
