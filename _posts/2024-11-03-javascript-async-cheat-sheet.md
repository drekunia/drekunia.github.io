---
layout: post
title: "Javascript Async Cheat Sheet"
date: 2024-11-03
categories: [Javascript]
tags: [Javascript, Cheat Sheet]
---

## Introduction to Asynchronous

- Asynchronous JavaScript allows the execution of code without blocking the main thread, enabling tasks like data fetching and timers to run concurrently.

```javascript
// Example of asynchronous setTimeout
console.log('Start');
setTimeout(() => console.log('Executed after 2 seconds'), 2000);
console.log('End');
```

## Callback

- A callback is a function passed into another function as an argument, which is then executed inside the outer function.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('Data received');
  }, 1000);
}
fetchData(data => console.log(data)); // "Data received"
```

## AJAX

- AJAX (Asynchronous JavaScript and XML) is a technique for creating fast and dynamic web pages by exchanging data with a server in the background.

```javascript
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.send();
```

## Receiving Data in AJAX

- Data received from an AJAX request can be processed in the onreadystatechange or onload event handlers.

```javascript
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
```

## Response Status in AJAX

- The response status indicates the result of the HTTP request (e.g., 200 for success, 404 for not found).

```javascript
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log('Success:', xhr.responseText);
  } else {
    console.log('Error:', xhr.status);
  }
};
```

## State in AJAX

- The readyState property indicates the state of the XMLHttpRequest.

```javascript
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log('Request completed');
  }
};
```

## Hookbin

- Hookbin is a tool for capturing, inspecting, and testing webhooks.

- Use Hookbin to create a unique URL to capture and inspect HTTP requests.

## Sending Data with AJAX

- Data can be sent with an AJAX request using the send method.

```javascript
let data = JSON.stringify({name: 'John'});
xhr.open('POST', 'https://api.example.com/data', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(data);
```

## URL Search Param

- URLSearchParams is an interface for working with query strings.

```javascript
let params = new URLSearchParams();
params.append('name', 'John');
console.log(params.toString()); // "name=John"
```

## Data Form with AJAX

- Form data can be sent using FormData and AJAX.

```javascript
let formData = new FormData();
formData.append('username', 'JohnDoe');
xhr.open('POST', 'https://api.example.com/form', true);
xhr.send(formData);
```

## Upload Files with AJAX

- Files can be uploaded using FormData and AJAX.

```javascript
let fileInput = document.querySelector('input[type="file"]');
let formData = new FormData();
formData.append('file', fileInput.files[0]);
xhr.open('POST', 'https://api.example.com/upload', true);
xhr.send(formData);
```

## Promise

- A Promise represents a value that may be available now, in the future, or never.

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success'), 1000);
});
promise.then(result => console.log(result)); // "Success"
```

## Promise Method

- Promise methods include then, catch, finally, all, and race.

```javascript
promise
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log('Completed'));
```

## Fetch API

- The Fetch API provides a modern interface for making network requests.

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

## Async Await

- async and await provide a way to write asynchronous code that looks synchronous.

```javascript
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData();
```

## Web Workers

- Web Workers allow you to run scripts in background threads.

```javascript
let worker = new Worker('worker.js');
worker.onmessage = function(event) {
  console.log('Message from worker:', event.data);
};
worker.postMessage('Start working');
```
