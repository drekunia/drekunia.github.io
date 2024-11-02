---
layout: post
title: "Javascript DOM Cheat Sheet"
date: 2024-11-03
categories: [Javascript]
tags: [Javascript, Cheat Sheet]
---

## Introduction to DOM

- The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

```javascript
// Accessing the DOM
console.log(document.title); // Gets the document's title
```

## Creating a Project

- Create a simple HTML file and include a JavaScript script.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Project</title>
</head>
<body>
  <script src="script.js"></script>
</body>
</html>
```

## Data Types

- The DOM primarily uses objects to represent documents and elements within those documents.

```javascript
// Example of a Node object
let node = document.getElementById('example');
console.log(typeof node); // "object"
```

## Documents

- The document object represents the whole HTML document.

```javascript
console.log(document.title); // "DOM Project"
document.title = "New Title";
```

## Nodes

- Nodes are the basic building blocks of the DOM tree. Examples include elements, text, and comments.

```javascript
let node = document.createElement('div');
console.log(node.nodeType); // 1 (Element Node)
```

## Elements

- Elements are a type of node and represent the HTML tags in a document.

```javascript
let div = document.createElement('div');
div.id = 'myDiv';
document.body.appendChild(div);
```

## NodeList

- A NodeList is a collection of nodes.

```javascript
let divs = document.querySelectorAll('div');
console.log(divs.length); // Number of <div> elements
```

## Attr

- Attr represents an attribute of an element.

```javascript
let attr = document.createAttribute('class');
attr.value = 'myClass';
let div = document.getElementById('myDiv');
div.setAttributeNode(attr);
```

## NamedNodeMap

- A collection of Attr objects, typically returned by element.attributes.

```javascript
let attributes = div.attributes;
console.log(attributes['id'].value); // "myDiv"
```

## Text Node

- Text nodes contain text content.

```javascript
let textNode = document.createTextNode('Hello, World!');
div.appendChild(textNode);
```

## Event Handler

- Functions that are called when an event occurs.

```javascript
div.onclick = function() {
  alert('Div clicked!');
};
```

## Events

- Events are actions that can be detected by JavaScript.

```javascript
div.addEventListener('click', function() {
  alert('Div clicked!');
});
```

## Styles

- The style property is used to manipulate the CSS of an element.

```javascript
div.style.color = 'red';
div.style.backgroundColor = 'blue';
```

## Inner Text and Inner HTML

- innerText sets or gets the text content, while innerHTML sets or gets the HTML content.

```javascript
div.innerText = 'Hello, World!';
div.innerHTML = '<span>Hello, World!</span>';
```

## Windows

- The window object represents an open window in a browser.

```javascript
console.log(window.innerWidth); // Width of the window's content area
window.alert('Hello, World!');
```

## Query Selector

- querySelector and querySelectorAll are used to find elements in the document.

```javascript
let div = document.querySelector('div');
let spans = document.querySelectorAll('span');
```

## Node Type

- The nodeType property returns the type of a node.

```javascript
console.log(div.nodeType); // 1 (Element Node)
```

## HTML Elements

- Examples of common HTML elements manipulated via the DOM.

```javascript
let button = document.createElement('button');
button.innerText = 'Click Me';
document.body.appendChild(button);
```

## HTML Form Element

- Access and manipulate forms and their elements.

```javascript
let form = document.createElement('form');
let input = document.createElement('input');
input.type = 'text';
input.name = 'username';
form.appendChild(input);
document.body.appendChild(form);
console.log(form.elements['username'].value);
```

## HTML Table Element

- Access and manipulate tables and their elements.

```javascript
let table = document.createElement('table');
let row = table.insertRow();
let cell = row.insertCell();
cell.innerText = 'Cell Content';
document.body.appendChild(table);
```

## Other HTML Elements

- Other commonly manipulated elements.

```javascript
let ul = document.createElement('ul');
let li = document.createElement('li');
li.innerText = 'List Item';
ul.appendChild(li);
document.body.appendChild(ul);
```
