# React Notes — List Rendering & Array Methods 📘😎

---

# 📌 What is List Rendering?

Displaying array data dynamically in React UI is called:
# List Rendering

---

# 📌 map() Method

## Definition

`map()` is used to loop through an array and return a new array.

---

# Syntax

```js
array.map((element, index) => {

})
```

---

# React Example

```js
const users = ["Fardin", "Rahul"];

{
  users.map((user, index) => {
    return <h1 key={index}>{user}</h1>
  })
}
```

---

# 📌 key Prop

## Definition

`key` is a unique identifier used by React to track list items.

---

# Example

```js
<h1 key={index}>{user}</h1>
```

---

# Why key is Important?

React uses key to:
- identify elements
- update items efficiently
- improve rendering performance

---

# 📌 filter() Method

## Definition

`filter()` is used to filter array elements based on a condition.

---

# Syntax

```js
array.filter((element) => {
   return condition
})
```

---

# Example

```js
const nums = [1,2,3,4];

const result = nums.filter((num) => {
   return num > 2
})
```

---

# Output

```text
[3,4]
```

---

# Important Point

## filter() returns:
# filtered array

---

# 📌 find() Method

## Definition

`find()` is used to find the first matching element from an array.

---

# Syntax

```js
array.find((element) => {
   return condition
})
```

---

# Example

```js
const nums = [1,2,3,4];

const result = nums.find((num) => {
   return num > 2
})
```

---

# Output

```text
3
```

---

# Important Point

## find() returns:
# single value/object

---

# 📌 reduce() Method

## Definition

`reduce()` is used to combine all array elements into a single value.

---

# Syntax

```js
array.reduce((acc, curr) => {

   return something

}, initialValue)
```

---

# Important Terms

| Term | Meaning |
|---|---|
| acc | accumulator |
| curr | current value |
| initialValue | starting value |

---

# Example

```js
const nums = [10,20,30];

const total = nums.reduce((acc, curr) => {

   return acc + curr

}, 0)
```

---

# Output

```text
60
```

---

# Important Point

## reduce() returns:
# single value

---

# 📌 sort() Method

## Definition

`sort()` is used to sort array elements.

---

# Ascending Order

```js
nums.sort((a,b) => {
   return a - b
})
```

---

# Descending Order

```js
nums.sort((a,b) => {
   return b - a
})
```

---

# Important Point

| Result | Meaning |
|---|---|
| Negative | Keep order |
| Positive | Swap |
| 0 | No change |

---

# 📌 Understanding a and b in sort()

`a` and `b` are the current comparing elements.

Example:

```js
nums.sort((a,b) => {
   return a - b
})
```

---

# 📌 JSX Rules

## JSX allows:
# Expressions ✅

Examples:
- map()
- reduce()
- ternary operator
- variables
- logical operators

---

## JSX does NOT allow:
# Statements ❌

Examples:
- if
- for
- while
- switch

---

# 📌 Expression vs Statement

| Expression | Statement |
|---|---|
| Returns value | Performs action |
| Allowed in JSX | Not directly allowed |

---

# 📌 Logical Operators in JSX

## AND Operator

```js
isLogin && <Home />
```

---

## OR Operator

```js
username || "Guest"
```

---

## NOT Operator

```js
!isLogin
```

---

# 📌 Most Important React Array Methods

| Method | Use |
|---|---|
| map() | Render UI |
| filter() | Filter data |
| find() | Find one item |
| reduce() | Create single value |
| sort() | Sort data |

---

# 📌 Common React Pattern

```js
data
.filter()
.sort()
.map()
```

---

# 📌 Interview Definitions

## map()

Used to loop through an array and return a new array.

---

## filter()

Used to filter elements based on condition.

---

## find()

Used to find first matching element.

---

## reduce()

Used to combine array elements into a single value.

---

## sort()

Used to sort array elements.

---

# 📌 Most Important Understanding

## map():
many → many

## filter():
many → fewer many

## find():
many → one

## reduce():
many → single value

---

# 🚀 Real Industry Usage

These methods are used in:
- product cards
- dashboards
- tables
- search functionality
- cart systems
- analytics
- admin panels

---

# ✨ Final Summary

React List Rendering is used to display dynamic array data in UI.

Important array methods:
- map()
- filter()
- find()
- reduce()
- sort()

These methods are heavily used in modern React applications.