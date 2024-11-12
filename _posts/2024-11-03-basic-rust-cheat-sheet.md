---
title: "Basic Rust Cheat Sheet"
author: drekunia
date: 2024-11-03
categories: [Rust]
tags: [Rust, Cheat Sheet]
---

## Cargo

Cargo is Rust's package manager and build system. It simplifies managing dependencies, building projects, and running tests.

```bash
# Create a new project
cargo new my_project

# Build the project
cargo build

# Run the project
cargo run

# Run tests
cargo test
```

## Unit Tests

- Rust has built-in support for writing unit tests.

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
```

## Variables

- Variables are immutable by default. Use mut to make them mutable.

```rust
let x = 5;
let mut y = 10;
y += 5;
```

## Comments

- Single-line comments start with //, multi-line comments are enclosed with /_..._/.

```rust
// This is a single-line comment

/*
 This is a multi-line comment
 */
```

## Data Type

- Rust is statically typed. Basic types include integers, floats, booleans, and characters.

```rust
let x: i32 = 42;
let y: f64 = 3.14;
let is_true: bool = true;
let c: char = 'A';
```

## Numbers

- Integer and floating-point numbers can be declared with different bit sizes.

```rust
let x: u8 = 255;
let y: f32 = 2.5;
```

## Numerical Operations

- Basic arithmetic operations: addition, subtraction, multiplication, division, and remainder.

```rust
let sum = 5 + 10;
let difference = 95.5 - 4.3;
let product = 4 * 30;
let quotient = 56.7 / 32.2;
let remainder = 43 % 5;
```

## Boolean

- Boolean type with values true and false.

```rust
let t: bool = true;
let f: bool = false;
```

## Comparison Operators

- Operators: ==, !=, <, >, <=, >=.

```rust
let is_equal = 1 == 1;
let is_greater = 5 > 3;
```

## Boolean Operators

- Logical operators: && (and), || (or), ! (not).

```rust
let and = true && false;
let or = true || false;
let not = !true;
```

## Char

- Character type represents a single Unicode scalar value.

```rust
let c: char = 'z';
let heart_eyed_cat = '😻';
```

## Tuples

- Tuples group multiple values with different types.

```rust
let tup: (i32, f64, u8) = (500, 6.4, 1);
let (x, y, z) = tup;
```

## Arrays

- Arrays store multiple values of the same type.

```rust
let a = [1, 2, 3, 4, 5];
let first = a[0];
```

## Constant

- Constants are immutable and declared with const. They must have a type.

```rust
const MAX_POINTS: u32 = 100_000;
```

## Variable Scope

- Variables are scoped to the block in which they are declared.

```rust
{
    let x = 42;
}
// x is not accessible here
```

## Memory Management

- Rust uses a system of ownership with rules that the compiler checks at compile time.

## Strings

- Strings can be immutable string slices (&str) or mutable String objects.

```rust
let s1 = "hello"; // &str
let s2 = String::from("hello");
```

## Ownership

- Each value in Rust has a variable that's called its owner. There can only be one owner at a time. When the owner goes out of scope, the value is dropped.

```rust
{
    let s = String::from("hello");
} // s is dropped here
```

## If Expression

- if expressions can be used to make decisions in the code.

```rust
let number = 3;
if number < 5 {
    println!("condition was true");
} else {
    println!("condition was false");
}
```

## Loops

- Repeated execution of a block of code.

```rust
loop {
    println!("again!");
    break;
}
```

## While Loop

- while runs while a condition is true.

```rust
let mut number = 3;
while number != 0 {
    println!("{}", number);
    number -= 1;
}
```

## For Loop

- Iterating over a collection.

```rust
let a = [10, 20, 30, 40, 50];
for element in a.iter() {
    println!("the value is: {}", element);
}
```

## Functions

- Functions are defined with the fn keyword.

```rust
fn main() {
    println!("Hello, world!");
}

fn add(x: i32, y: i32) -> i32 {
    x + y
}
```

## Ownership in Function

- Functions can take ownership of parameters.

```rust
fn takes_ownership(some_string: String) {
    println!("{}", some_string);
}

let s = String::from("hello");
takes_ownership(s);
// s is no longer valid here
```

## References and Borrowing

- References allow you to refer to some value without taking ownership.

```rust
fn calculate_length(s: &String) -> usize {
    s.len()
}

let s1 = String::from("hello");
let len = calculate_length(&s1);
```

## Slice

- Slices allow you to reference a contiguous sequence of elements in a collection rather than the whole collection.

```rust
let s = String::from("hello world");
let hello = &s[0..5];
let world = &s[6..11];
```

## String Slice

- A specific type of slice.

```rust
let s = "hello world";
let hello = &s[0..5];
let world = &s[6..11];
```

## Struct

- Structs are used to create custom data types.

```rust
struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}

let user1 = User {
    username: String::from("someone@example.com"),
    email: String::from("someone@example.com"),
    sign_in_count: 1,
    active: true,
};
```

## Method

- Methods are functions defined within the context of a struct.

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

let rect = Rectangle { width: 30, height: 50 };
println!("The area of the rectangle is {} square pixels.", rect.area());
```

## Enums

- Enums allow you to define a type by enumerating its possible values.

```rust
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

let m = Message::Write(String::from("hello"));
```

## Pattern Matching

- match expressions are used for pattern matching.

```rust
let number = 7;

match number {
    1 => println!("one"),
    2 => println!("two"),
    3 => println!("three"),
    4 => println!("four"),
    5 => println!("five"),
    _ => println!("something else"),
}
```

## Type Alias

- Type aliases provide a way to create a new name for an existing type.

```rust
type Kilometers = i32;

let x: Kilometers = 5;
```

## Modules

- Modules are used to organize code into namespaces.

```rust
mod my_module {
    pub fn my_function() {
        println!("Hello from my_function!");
    }
}

fn main() {
    my_module::my_function();
}
```

## Crate

- A crate is a binary or library. The Cargo.toml file defines a crate’s dependencies.

```toml
[dependencies]
rand = "0.8.4"
```

## Traits

- Traits are used to define shared behavior.

```rust
pub trait Summary {
    fn summarize(&self) -> String;
}

pub struct Article {
    pub headline: String,
    pub location: String,
    pub author: String,
    pub content: String,
}

impl Summary for Article {
    fn summarize(&self) -> String {
        format!("{}, by {} ({})",
        format!("{}, by {} ({})", self.headline, self.author, self.location)
      }
  }

  let article = Article {
      headline: String::from("Rust Programming"),
      location: String::from("The Internet"),
      author: String::from("Rustacean"),
      content: String::from("Rust is great!"),
  };

  println!("New article available! {}", article.summarize());
```

## Generic

- Generics allow for writing flexible and reusable code.

```rust
fn largest<T: PartialOrd>(list: &[T]) -> &T {
    let mut largest = &list[0];
    for item in list.iter() {
        if item > largest {
            largest = item;
        }
    }
    largest
}

let numbers = vec![34, 50, 25, 100, 65];
println!("The largest number is {}", largest(&numbers));
```

## Overloadable Operators

- Operators can be overloaded using traits.

```rust
use std::ops::Add;

#[derive(Debug, PartialEq)]
struct Point {
    x: i32,
    y: i32,
}

impl Add for Point {
    type Output = Point;

    fn add(self, other: Point) -> Point {
        Point {
            x: self.x + other.x,
            y: self.y + other.y,
        }
    }
}

let p1 = Point { x: 1, y: 0 };
let p2 = Point { x: 2, y: 3 };
println!("{:?}", p1 + p2);
```

## Optional Values

- The Option type is used when a value could be something or nothing.

```rust
let some_number = Some(5);
let absent_number: Option<i32> = None;

if let Some(n) = some_number {
    println!("The number is {}", n);
}
```

## Comparing

- The PartialEq and Eq traits are used for equality comparisons.

```rust
#[derive(Debug, PartialEq)]
struct Rectangle {
    width: u32,
    height: u32,
}

let rect1 = Rectangle { width: 30, height: 50 };
let rect2 = Rectangle { width: 30, height: 50 };
println!("Are rectangles equal? {}", rect1 == rect2);
```

## String Manipulation

- Rust provides extensive support for string manipulation.

```rust
let mut s = String::from("hello");
s.push_str(", world");
println!("{}", s);
```

## Formatting

- String formatting with the format! macro.

```rust
let s = format!("{}-{}", "hello", "world");
println!("{}", s);
```

## Closure

- Closures are anonymous functions you can save in a variable or pass as arguments.

```rust
let add_one = |x: i32| x + 1;
println!("{}", add_one(5));
Collection
Rust's standard library provides collections like vectors, hash maps, and hash sets.
```

## Sequences

- Vectors are the most commonly used sequence collection.

```rust
let mut v = vec![1, 2, 3];
v.push(4);
println!("{:?}", v);
```

## Maps

- Hash maps store a mapping of keys to values.

```rust
use std::collections::HashMap;

let mut scores = HashMap::new();
scores.insert(String::from("Blue"), 10);
scores.insert(String::from("Yellow"), 50);
```

## Sets

- Hash sets store unique values.

```rust
use std::collections::HashSet;

let mut books = HashSet::new();
books.insert("The Rust Programming Language");
```

## Iterators

- Iterators allow you to process a series of elements.

```rust
let v = vec![1, 2, 3];
let v_iter = v.iter();
for val in v_iter {
    println!("{}", val);
}
```

## Error Handling

- Rust handles errors with the Result type.

```rust
use std::fs::File;
use std::io::ErrorKind;

let f = File::open("hello.txt");

let f = match f {
    Ok(file) => file,
    Err(ref error) if error.kind() == ErrorKind::NotFound => {
        match File::create("hello.txt") {
            Ok(fc) => fc,
            Err(e) => panic!("Problem creating the file: {:?}", e),
        }
    },
    Err(error) => panic!("Problem opening the file: {:?}", error),
};
```

## Lifetime

- Lifetimes ensure that references are valid as long as needed.

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

let string1 = String::from("long string is long");
let result;
{
    let string2 = String::from("xyz");
    result = longest(string1.as_str(), string2.as_str());
}
```

## Attributes

- Attributes are metadata applied to some module, crate, or item.

```rust
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}
```

## Smart Pointers

- Smart pointers are data structures that act like a pointer but also have additional metadata and capabilities.

```rust
use std::rc::Rc;

let a = Rc::new(5);
let b = Rc::clone(&a);
```

## Dereference

- The dereference operator (\*) allows access to the value the pointer is pointing to.

```rust
let x = 5;
let y = &x;

assert_eq!(5, *y);
```

## Cleanup

- Rust uses the Drop trait to run code when an object goes out of scope.

```rust
struct CustomSmartPointer {
    data: String,
}

impl Drop for CustomSmartPointer {
    fn drop(&mut self) {
        println!("Dropping CustomSmartPointer with data `{}`!", self.data);
    }
}

let c = CustomSmartPointer { data: String::from("my stuff") };
```

## Multiple Ownership

- The Rc type allows for multiple ownership of data.

```rust
use std::rc::Rc;

let a = Rc::new(5);
let b = Rc::clone(&a);
```

## Interior Mutability

- Interior mutability allows you to mutate data even when there are immutable references to that data, using RefCell or Mutex.

```rust
use std::cell::RefCell;

let x = RefCell::new(42);
*x.borrow_mut() += 1;
```

## Static

- Static variables have a 'static lifetime.

```rust
static HELLO_WORLD: &str = "Hello, world!";
```

## Macros

- Macros are a way of writing code that writes other code (metaprogramming).

```rust
macro_rules! say_hello {
    () => {
        println!("Hello!");
    };
}

say_hello!();
```
