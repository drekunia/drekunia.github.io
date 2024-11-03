---
title: "Basic Javascript Cheat Sheet"
author: drekunia
date: 2024-11-03
categories: [Javascript]
tags: [Javascript, Cheat Sheet]
---

## Comments

### Single-line comments

```javascript
// This is a single-line comment
let x = 5 // This is an inline comment
```

### Multi-line comments

```javascript
/*
This is a multi-line comment.
It spans multiple lines.
*/
let y = 10
```

## Primitive Data Types

### Number Data Type

Represents both integer and floating-point numbers.

```javascript
let integer = 42
let float = 3.14
```

### Boolean Data Type

Represents logical entities.

```javascript
let isTrue = true
let isFalse = false
```

### String Data Type

Represents a sequence of characters.

```javascript
let singleQuote = "Hello"
let doubleQuote = "World"
let backtick = `Hello, World!`
```

## Variables

Declared using `var`, `let`, or `const`.

```javascript
var a = 10 // Function-scoped
let b = 20 // Block-scoped
const c = 30 // Block-scoped and cannot be reassigned
```

## Mathematical Operators

```javascript
let x = 5
let y = 2
console.log(x + y) // 7
console.log(x - y) // 3
console.log(x * y) // 10
console.log(x / y) // 2.5
console.log(x % y) // 1
x++
console.log(x) // 6
y--
console.log(y) // 1
```

## Comparison Operators

```javascript
console.log(5 == "5") // true
console.log(5 === "5") // false
console.log(5 != "5") // false
console.log(5 !== "5") // true
console.log(5 > 3) // true
console.log(5 < 3) // false
console.log(5 >= 5) // true
console.log(5 <= 3) // false
```

## Logical Operators

```javascript
let a = true
let b = false
console.log(a && b) // false
console.log(a || b) // true
console.log(!a) // false
```

## Console

```javascript
console.log("Hello, World!")
console.error("This is an error message")
console.warn("This is a warning message")
console.info("This is an info message")
console.debug("This is a debug message")
```

## Template Strings

```javascript
let name = "Alice"
let greeting = `Hello, ${name}!`
console.log(greeting) // Hello, Alice!
```

## String and Number Conversion

```javascript
let num = "42"
let str = 42
console.log(Number(num)) // 42
console.log(parseInt("42.5")) // 42
console.log(parseFloat("42.5")) // 42.5
console.log(str.toString()) // '42'
```

## Array Data Type

```javascript
let arr = [1, 2, 3, 4, 5]
console.log(arr[0]) // 1
arr.push(6)
console.log(arr) // [1, 2, 3, 4, 5, 6]
arr.pop()
console.log(arr) // [1, 2, 3, 4, 5]
```

## Object Data Type

```javascript
let obj = { name: "Alice", age: 25 }
console.log(obj.name) // Alice
obj.age = 26
console.log(obj.age) // 26
```

## Control Structures

### If Expression

```javascript
let x = 10
if (x > 5) {
  console.log("x is greater than 5")
} else {
  console.log("x is not greater than 5")
}
```

### Switch Expression

```javascript
let fruit = "apple"
switch (fruit) {
  case "apple":
    console.log("This is an apple")
    break
  case "banana":
    console.log("This is a banana")
    break
  default:
    console.log("Unknown fruit")
}
```

## Special Values

### Undefined

```javascript
let x
console.log(x) // undefined
```

### Null

```javascript
let y = null
console.log(y) // null
```

## Operators

### Typeof Operator

```javascript
console.log(typeof 42) // number
console.log(typeof "hello") // string
console.log(typeof true) // boolean
console.log(typeof undefined) // undefined
console.log(typeof null) // object (this is a known quirk in JavaScript)
```

### In Operator

```javascript
let obj = { name: "Alice", age: 25 }
console.log("name" in obj) // true
console.log("height" in obj) // false
```

### Ternary Operator

```javascript
let age = 20
let canVote = age >= 18 ? "Yes" : "No"
console.log(canVote) // Yes
```

### Nullish Coalescing Operator

```javascript
let foo = null ?? "default"
console.log(foo) // default
let bar = 0 ?? 42
console.log(bar) // 0
```

### Optional Chaining

```javascript
let user = { name: "Alice", address: { city: "Wonderland" } }
console.log(user?.address?.city) // Wonderland
console.log(user?.contact?.phone) // undefined
```

### Falsy and Truthy

```javascript
let falsyValues = [false, 0, "", null, undefined, NaN]
falsyValues.forEach((value) => {
  if (!value) {
    console.log(`${value} is falsy`)
  }
})

let truthyValues = [true, 1, "non-empty string", {}, []]
truthyValues.forEach((value) => {
  if (value) {
    console.log(`${value} is truthy`)
  }
})
```

## Loops

### For Loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

### While Loop

```javascript
let i = 0
while (i < 5) {
  console.log(i)
  i++
}
```

### Do While Loop

```javascript
let i = 0
do {
  console.log(i)
  i++
} while (i < 5)
```

### Break and Continue

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) break
  console.log(i) // 0, 1
}

for (let i = 0; i < 5; i++) {
  if (i === 2) continue
  console.log(i) // 0, 1, 3, 4
}
```

### Labels

```javascript
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1) break outerLoop
    console.log(`i = ${i}, j = ${j}`)
  }
}
```

### For In

```javascript
let obj = { a: 1, b: 2, c: 3 }
for (let key in obj) {
  console.log(`${key}: ${obj[key]}`)
}
```

### For Of

```javascript
let arr = [10, 20, 30]
for (let value of arr) {
  console.log(value)
}
```

### With Statement

Generally avoided due to potential confusion.

```javascript
let obj = { a: 1, b: 2 }
with (obj) {
  console.log(a + b) // 3
}
```

## Functions

### Function Declaration

```javascript
function greet(name) {
  return `Hello, ${name}`
}
console.log(greet("Alice")) // Hello, Alice
```

### Function Parameters and Return Value

```javascript
function add(a, b) {
  return a + b
}
console.log(add(2, 3)) // 5
```

### Optional and Default Parameters

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}`
}
console.log(greet()) // Hello, Guest
```

### Rest Parameters

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0)
}
console.log(sum(1, 2, 3, 4)) // 10
```

### Function as Value

```javascript
const sayHello = function (name) {
  return `Hello, ${name}`
}
console.log(sayHello("Bob")) // Hello, Bob
```

### Anonymous Function

```javascript
setTimeout(function () {
  console.log("This is an anonymous function")
}, 1000)
```

### Function in Function

```javascript
function outer() {
  function inner() {
    console.log("Inner function")
  }
  inner()
}
outer() // Inner function
```

### Scope

```javascript
let globalVar = "global"
function scopeExample() {
  let localVar = "local"
  console.log(globalVar) // global
  console.log(localVar) // local
}
scopeExample()
console.log(localVar) // ReferenceError: localVar is not defined
```

### Recursive Function

```javascript
function factorial(n) {
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}
console.log(factorial(5)) // 120
```

### Function Generator

```javascript
function* generatorFunction() {
  yield 1
  yield 2
  yield 3
}
const generator = generatorFunction()
console.log(generator.next().value) // 1
console.log(generator.next().value) // 2
console.log(generator.next().value) // 3
```

### Arrow Functions

```javascript
const add = (a, b) => a + b
console.log(add(2, 3)) // 5
```

### Closure

```javascript
function makeCounter() {
  let count = 0
  return function () {
    count++
    return count
  }
}
const counter = makeCounter()
console.log(counter()) // 1
console.log(counter()) // 2
```

### Object Method

```javascript
let obj = {
  greet() {
    return "Hello"
  },
}
console.log(obj.greet()) // Hello
```

### Keyword this

```javascript
let person = {
  name: "Alice",
  greet() {
    return `Hello, ${this.name}`
  },
}
console.log(person.greet()) // Hello, Alice
```

### Arrow Function in Object

```javascript
let person = {
  name: "Alice",
  greet: () => `Hello, ${this.name}`,
}
console.log(person.greet()) // Hello, undefined
```

### Getters and Setters

```javascript
let obj = {
  _name: "Alice",
  get name() {
    return this._name
  },
  set name(value) {
    this._name = value
  },
}
console.log(obj.name) // Alice
obj.name = "Bob"
console.log(obj.name) // Bob
```

## Miscellaneous

### Variable var Problem

`var` declarations are hoisted.

```javascript
console.log(a) // undefined
var a = 10
```

### Destructuring

```javascript
let [a, b] = [1, 2]
console.log(a) // 1
console.log(b) // 2

let { name, age } = { name: "Alice", age: 25 }
console.log(name) // Alice
console.log(age) // 25
```

### Strict Mode

```javascript
"use strict"
let x = 3.14
delete x // SyntaxError: Delete of an unqualified identifier in strict mode.
```

### Debugger

```javascript
let x = 10
debugger // Execution will pause here if the debugger is open
x += 20
console.log(x) // 30
```
