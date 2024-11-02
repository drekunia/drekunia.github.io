---
layout: post
title: "Javascript OOP Cheat Sheet"
date: 2024-11-03
categories: [Javascript]
tags: [Javascript, Cheat Sheet]
---

## Introduction to OOP

- OOP is a programming paradigm based on the concept of "objects", which can contain data and methods.

- Key concepts include classes, objects, inheritance, encapsulation, and polymorphism.

## Creating a Constructor Function

- A function used to create objects.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

## Properties in Constructor Function

- Properties are defined using this.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

## Methods in Constructor Function

- Methods are functions defined within the constructor function.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    return `Hello, my name is ${this.name}`;
  };
}
```

## Parameters in Constructor Function

- Constructor functions can take parameters to initialize object properties.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let person1 = new Person('Alice', 30);
```

## Constructor Inheritance

- Achieved using call or apply methods.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Student(name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
}
```

## Prototype

- Shared properties and methods are defined on the prototype.

```javascript
Person.prototype.sayHi = function() {
  return `Hi, I am ${this.name}`;
};
```

## Prototype Inheritance

- Achieved by setting the prototype of the constructor function.

```javascript
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
```

## Class

- A blueprint for creating objects.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

## Constructor in Class

- Special method for creating and initializing an object.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

## Property in Class

- Properties are defined within the constructor.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

## Methods in Class

- Functions associated with an object.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name}`;
  }
}
```

## Class Inheritance

- A class can inherit from another class using extends.

```javascript
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}
```

## Super Constructor

- Calls the parent class's constructor.

```javascript
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}
```

## Super Method

- Calls a method from the parent class.

```javascript
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  study() {
    return `${super.greet()} and I am studying`;
  }
}
```

## Getters and Setters in Class

- Accessor properties for getting and setting values.

```javascript
class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}
```

## Public Class Field

- Public fields are declared outside the constructor.

```javascript
class Person {
  name = 'Alice';
}
```

## Private Class Field

- Private fields are declared using #.

```javascript
class Person {
  #name;
  constructor(name) {
    this.#name = name;
  }
  getName() {
    return this.#name;
  }
}
```

## Private Method

- Private methods are declared using #.

```javascript
class Person {
  #name;
  constructor(name) {
    this.#name = name;
  }
  #privateMethod() {
    return 'This is a private method';
  }
}
```

## Instanceof operator

- Checks if an object is an instance of a class.

```javascript
let person = new Person('Alice');
console.log(person instanceof Person); // true
```

## Static Field

- Static fields are declared using static keyword.

```javascript
class Person {
  static species = 'Homo sapiens';
}
console.log(Person.species); // Homo sapiens
```

## Static Method

- Static methods are declared using static keyword.

```javascript
class Person {
  static greet() {
    return 'Hello';
  }
}
console.log(Person.greet()); // Hello
```

## Error

- Instances of the Error class.

```javascript
try {
  throw new Error('Something went wrong');
} catch (error) {
  console.error(error.message); // Something went wrong
}
```

## Handling error

- Using try, catch, and finally.

```javascript
try {
  // Code that may throw an error
} catch (error) {
  console.error(error);
} finally {
  console.log('This will always run');
}
```

## Created Class Error

- Custom error classes extend the built-in Error class.

```javascript
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

try {
  throw new CustomError('Custom error occurred');
} catch (error) {
  console.error(error.name); // CustomError
  console.error(error.message); // Custom error occurred
}
```

## Iterables and Iterators

- Iterables are objects that implement the Symbol.iterator method.

```javascript
let iterable = {
  [Symbol.iterator]() {
    let step = 0;
    return {
      next() {
        step++;
        if (step === 1) {
          return { value: 'Hello', done: false };
        } else if (step === 2) {
          return { value: 'World', done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (let value of iterable) {
  console.log(value);
}
// Output:
// Hello
// World
```
