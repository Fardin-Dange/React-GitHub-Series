# React Notes — Form Handling & Controlled Components 📝

---

# 📘 What is Form Handling?

Form Handling in React means managing form data using React state.

Examples:
- Login Form
- Signup Form
- Registration Form
- Contact Form

---

# 📘 What is a Controlled Component?

A Controlled Component is a component in which the form input is controlled by the React state variable using useState.

---

# 🔄 Controlled Component Flow

```text
User Types in Input
        ↓
onChange Event Runs
        ↓
State Updates
        ↓
Input Value Updates
```

---

# 📘 Basic Controlled Component Example

```js
import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState("");

  return (
    <div>

      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />

      <h1>{name}</h1>

    </div>
  )
}

export default App
```

---

# 📘 Important Concepts

## ✅ value

```js
value={name}
```

Connects the input field with React state.

---

## ✅ onChange

```js
onChange={(e) => {}}
```

Tracks input changes.

---

## ✅ e.target.value

```js
e.target.value
```

Returns current input value.

---

# 📘 Form Handling Example

```js
import React, { useState } from 'react'

const App = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  return (

    <form>

      <input
        type="text"
        value={user.name}
        onChange={(e) => {
          setUser({
            ...user,
            name: e.target.value
          })
        }}
      />

    </form>
  )
}

export default App
```

---

# 📘 Why Use Spread Operator?

```js
setUser({
  ...user,
  name: e.target.value
})
```

The spread operator preserves previous object values.

Without spread operator:

```js
setUser({
  name: "Fardin"
})
```

Other properties like email and password will be removed.

---

# 📘 Form Submission

```js
<form onSubmit={handleSubmit}>
```

Used to handle form submission.

---

# 📘 preventDefault()

```js
e.preventDefault()
```

Prevents page refresh on form submission.

---

# 📘 Complete Registration Form Example

```js
import React, { useState } from 'react'

const App = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  return (

    <form onSubmit={(e) => {

      e.preventDefault();

      console.log(user);

    }}>

      <input
        type="text"
        value={user.name}
        onChange={(e) => {
          setUser({
            ...user,
            name: e.target.value
          })
        }}
      />

      <input
        type="email"
        value={user.email}
        onChange={(e) => {
          setUser({
            ...user,
            email: e.target.value
          })
        }}
      />

      <input
        type="password"
        value={user.password}
        onChange={(e) => {
          setUser({
            ...user,
            password: e.target.value
          })
        }}
      />

      <button type="submit">
        Submit
      </button>

    </form>
  )
}

export default App
```

---

# 📘 Controlled vs Uncontrolled Component

| Controlled Component | Uncontrolled Component |
|---|---|
| React controls input | DOM controls input |
| useState used | useRef used |
| value attribute used | value attribute not required |
| Most commonly used | Less commonly used |

---

# 📘 Uncontrolled Component Example

```js
import React, { useRef } from 'react'

const App = () => {

  const inputRef = useRef();

  const handleSubmit = () => {

    console.log(inputRef.current.value);
  }

  return (
    <div>

      <input type="text" ref={inputRef} />

      <button onClick={handleSubmit}>
        Submit
      </button>

    </div>
  )
}

export default App
```

---

# 📘 Important Interview Questions

## Q1. What is a Controlled Component?

A Controlled Component is a component in which the form input is controlled by React state.

---

## Q2. Why use onChange?

To track input changes.

---

## Q3. Why use preventDefault()?

To prevent page refresh during form submission.

---

## Q4. Why use the spread operator?

To preserve previous object values while updating state.

---

## Q5. Difference between Controlled and Uncontrolled Components?

Controlled Components use React state, while Uncontrolled Components use the DOM directly.

---

# 📘 Best Practices

✅ Use controlled components for forms  
✅ Use value + onChange together  
✅ Use preventDefault() in forms  
✅ Use spread operator with object state  
✅ Use meaningful input names

---

# 🚀 Real Industry Usage

Form Handling and Controlled Components are used in:
- Login Forms
- Signup Forms
- Contact Forms
- Admin Panels
- Search Bars
- Profile Forms

---

# ✨ Final Summary

Controlled Components allow React to fully control form inputs using state.

Form Handling helps manage:
- user input
- validation
- form submission
- dynamic updates

These concepts are the foundation of React Forms.