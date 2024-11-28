# 🚀 Lab 2 - Node.js Calculator API 🧮

Welcome to the **Lab 2** project! We’ll build a simple Node.js API that performs basic arithmetic operations like addition, subtraction, multiplication, and division. 🎉

### 📦 Prerequisites
Make sure to have the following installed:
- [Node.js](https://nodejs.org/) (>= 16.0)
- [npm](https://www.npmjs.com/)

---

## Start the Server 🚀
Run the following command to start your server using Nodemon:

```bash
npm start
```

Your server will be running at http://localhost:3000. ✨

## Test Your Application 🔍

Now, we can test the server by navigating to the following URLs in the browser.

Addition ➕
```bash
http://localhost:3000/lab2?method=add&x=16&y=4
```

Subtraction ➖
```bash
http://localhost:3000/lab2?method=subtract&x=16&y=4
```

Multiplication ✖️
```bash
http://localhost:3000/lab2?method=multiply&x=16&y=4
```
Division ➗
```bash
http://localhost:3000/lab2?method=divide&x=16&y=4

```
Error Handling ❌

If you try an invalid method (e.g., method=unknown), the server will return an error message in JSON format:

```bash
{
  "error": "Invalid method"
}
```

## Output
The result as a JSON object:-
```bash
{
  "x": "16",
  "y": "4",
  "operation": "add",
  "result": "20"
}
```