console.log("Hello Typescript");

// Implicit Types
let helloWorld = "Hello World";

// Explicit types
let firstName: string = "John";
let age: number = 30;

// Tuple
type stringAndNumber = [string, number];

let x: stringAndNumber = ["Hey", 5];

// Enums
enum Continents {
  North_America,
  South_America,
  Africa,
  Asia,
  Euripe,
  Antartica,
  Australia,
}

// usage
var region = Continents.Africa;

// Interface
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "John",
  id: 0,
};

// Composing types -> Union
type WindowStates = "open" | "close" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9;

const odd: OddNumberUnderTen = 5;

const getLength = (param: string | string[]) => {
    return param.length;
}

getLength('test');