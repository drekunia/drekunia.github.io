---
title: "Basic Typescript Cheat Sheet"
author: drekunia
date: 2024-11-03
categories: [Typescript]
tags: [Typescript, Cheat Sheet]
---

## Creating a Project

- Initialize a new TypeScript project with:

```bash
mkdir my-project
cd my-project
npm init -y
npm install typescript --save-dev
```

## Setup TypeScript Project

- Create a tsconfig.json file:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src"]
}
```

- Create a src directory for TypeScript files.

## Say Hello Function

- Create a simple function:

```typescript
// src/hello.ts
function sayHello(name: string): string {
  return `Hello, ${name}!`;
}
console.log(sayHello('World'));
```

## Compile TypeScript

- Compile TypeScript to JavaScript:

```bash
npx tsc
```

## Primitive Data Types

- TypeScript supports string, number, boolean, null, and undefined.

```typescript
let isDone: boolean = false;
let age: number = 25;
let firstName: string = "John";
let notDefined: undefined = undefined;
let notPresent: null = null;
```

## Babel TypeScript

- Use Babel for compiling TypeScript:

```bash
npm install --save-dev @babel/core @babel/preset-env @babel/preset-typescript
```

- Create a .babelrc file:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-typescript"]
}
```

## Array Data Type

- Arrays can be typed with element types.

```typescript
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
```

## Any Data Type

- The any type allows any kind of value.

```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
```

## Union Type

- Variables can hold values of multiple types.

```typescript
let value: string | number;
value = "Hello";
value = 42;
```

## Type Alias

- Create a custom type.

```typescript
type StringOrNumber = string | number;
let value: StringOrNumber;
value = "Hello";
value = 42;
```

## Object Type

- Define the shape of an object.

```typescript
let person: {name: string; age: number} = {
  name: "John",
  age: 25
};
```

## Optional Properties

- Properties can be optional.

```typescript
interface Person {
  name: string;
  age?: number;
}
let person: Person = {name: "Alice"};
```

## Enums

- Define a set of named constants.

```typescript
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;
```

## Null and Undefined

- Variables can explicitly be null or undefined.

```typescript
let u: undefined = undefined;
let n: null = null;
```

## Interfaces

- Define the structure of an object.

```typescript
interface Person {
  name: string;
  age: number;
}
let person: Person = {name: "Alice", age: 25};
```

## Function Interface

- Define a function type.

```typescript
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
  return src.indexOf(sub) > -1;
};
```

## Indexable Interface

- Indexable types have index signatures.

```typescript
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray = ["Alice", "Bob"];
```

## Extending Interface

- Interfaces can extend other interfaces.

```typescript
interface Shape {
  color: string;
}
interface Square extends Shape {
  sideLength: number;
}
let square: Square = {color: "blue", sideLength: 10};
```

## Functions in Interface

- Functions can be defined within interfaces.

```typescript
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}
class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
}
```

## Intersection Types

- Combine multiple types into one.

```typescript
interface Person {
  name: string;
}
interface Employee {
  employeeId: number;
}
type Staff = Person & Employee;
let staff: Staff = {name: "Alice", employeeId: 123};
```

## Type Assertions

- Override the inferred type.

```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

## Functions

- Typed function declaration.

```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

## Function Parameters

- Specify types for parameters.

```typescript
function greet(name: string, age?: number): string {
  if (age) {
    return `Hello, ${name}. You are ${age} years old.`;
  } else {
    return `Hello, ${name}`;
  }
}
```

## Function Overloading

- Functions with the same name but different parameter types.

```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}
console.log(add(1, 2)); // 3
console.log(add("Hello, ", "World!")); // Hello, World!
```

## Function As Parameter

- Pass functions as parameters.

```typescript
function applyOperation(x: number, y: number, operation: (a: number, b: number) => number): number {
  return operation(x, y);
}
```

## If Statements

- Conditional logic.

```typescript
let num = 10;
if (num > 5) {
  console.log("Number is greater than 5");
} else {
  console.log("Number is 5 or less");
}
```

## Ternary Operator

- Conditional expression.

```typescript
let num = 10;
let result = num > 5 ? "Greater than 5" : "5 or less";
```

## Switch Statement

- Multi-way branch.

```typescript
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("This is an apple");
    break;
  case "banana":
    console.log("This is a banana");
    break;
  default:
    console.log("Unknown fruit");
}
```

## For Loop

- Iteration with a counter.

```typescript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## While Loop

- Iteration with a condition.

```typescript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

## Do While Loop

- Iterate at least once.

```typescript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

## Break and Continue

- Control loop execution.

```typescript
for (let i = 0; i < 5; i++) {
  if (i === 2) break; // Exit loop
  console.log(i); // 0, 1
}
for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // Skip current iteration
  console.log(i); // 0, 1, 3, 4
}
```

## JavaScript Features

- TypeScript builds on JavaScript and supports its features such as closures, higher-order functions, and asynchronous programming.

```typescript
// Closure
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Asynchronous programming with Promises
function fetchData(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data from ${url}`);
    }, 1000);
  });
}

fetchData("https://example.com").then(data => console.log(data));
```
