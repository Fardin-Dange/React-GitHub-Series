# D11 — Higher Order Components (HOC) 📘😎

---

# 📌 What is HOC?

HOC stands for:
# Higher Order Component

A Higher Order Component is:
# a function that takes a component as input
and returns a new enhanced component as output.

---

# Simple Definition 😄

```text
Component input lo 😄
+
extra functionality add karo 😎
+
new enhanced component return karo 🚀
```

---

# MOST IMPORTANT UNDERSTANDING 🔥

HOC:
# component ko modify nahi karta 😄

Instead:
# new enhanced component return karta hai 😎

---

# 📌 Why HOC is Needed?

HOC is used for:
# reusable logic

---

# Problem Without HOC 😵

Suppose:
- Dashboard
- Profile
- Settings

sabme same login logic likhna pad raha 😵

```js
if(!isLogin){

   return <h1>Login First</h1>
}
```

Repeated code 😵🔥

---

# Solution 😎

Create one reusable wrapper:
# HOC 🚀

---

# 📌 HOC Syntax

```js
const HOC = (Component) => {

   return () => {

      return <Component />

   }
}
```

---

# Syntax Understanding

| Part | Meaning |
|---|---|
| `(Component)` | input component |
| `return () => {}` | new component |
| `<Component />` | original component render |

---

# 📌 HOC Workflow

```text
Original Component
   ↓
HOC wraps component
   ↓
New Enhanced Component
   ↓
Extra functionality added 😎
```

---

# 📌 Example — withMessage HOC

## withMessage.jsx

```js
import React from 'react'

const withMessage = (Component) => {

  return () => {

    return (

      <>

        <h1>Welcome Fardin 😎</h1>

        <Component />

      </>

    )
  }
}

export default withMessage
```

---

# Home.jsx

```js
import React from 'react'

const Home = () => {

  return (

    <div>

      <h2>Welcome to Home Component</h2>

    </div>
  )
}

export default Home
```

---

# App.jsx

```js
import React from 'react'
import Home from './components/Home'
import withMessage from './hoc/withMessage'

const EnhancedHome = withMessage(Home)

const App = () => {

  return (

    <div>

      <EnhancedHome />

    </div>
  )
}

export default App
```

---

# Output 😎

```text
Welcome Fardin 😎
Welcome to Home Component
```

---

# 📌 Real World Example — withAuth HOC

HOC can also be used for:
- authentication
- permissions
- loading
- logging

---

# withAuth.jsx

```js
import React from 'react'

const withAuth = (Component) => {

  return () => {

    const isLogin = true;

    if(!isLogin){

      return <h1>You are not authorized 😵</h1>
    }

    return <Component />

  }
}

export default withAuth
```

---

# Workflow

```text
Home
   ↓
withAuth(Home)
   ↓
ProtectedHome
   ↓
Login Check 😎
```

---

# 📌 HOC Naming Convention

HOC names usually start with:
```text
with
```

Examples:
- withAuth
- withLoading
- withLogger
- withTheme

---

# Why "with"? 😄

Meaning:

```text
Component WITH extra functionality 😎
```

---

# 📌 Important Rule — Capital Letter

Correct:

```js
<Component />
```

Wrong:

```js
<component />
```

---

# Why? 🤔

Because:
```text
React lowercase ko HTML tag samajhta hai 😵
```

---

# 📌 Important Rule — Passing Component

Correct:

```js
withAuth(Home)
```

Wrong:

```js
withAuth(<Home />)
```

---

# Why? 🤔

Because HOC expects:
# component function 😄

NOT:
# JSX element 😵

---

# 📌 Props Forwarding in HOC 🔥

Without props forwarding:
# wrapped component props receive nahi karega 😵

---

# Correct Way

```js
const withProps = (Component) => {

   return (props) => {

      return <Component {...props}/>

   }
}
```

---

# 📌 What is `{...props}`?

Spread operator.

Example:

```js
<Component {...props}/>
```

becomes:

```js
<Component
   name="Fardin"
   age={22}
/>
```

---

# 📌 Outer Function vs Inner Function 🔥

## Outer Function

```js
withProps(Component)
```

Receives:
# component 😄

Works during:
# wrapping phase 🚀

---

## Inner Returned Component

```js
(props) => {}
```

Receives:
# props 😎

Works during:
# rendering phase 🚀

---

# 📌 Complete Flow

```text
Home
   ↓
withProps(Home)
   ↓
EnhancedHome created 😎

   ↓

<EnhancedHome name="Fardin"/>

   ↓

EnhancedHome receives props 😄

   ↓

<Home name="Fardin"/>
```

---

# 📌 Most Important Final Understanding 🚀

HOC:
# ek reusable wrapper function hota hai 😄

Jo:
- component ko input leta hai
- extra functionality add karta hai
- new enhanced component return karta hai 😎🔥

---

# 📌 Real Industry Usage

Used for:
- authentication
- permissions
- loading spinner
- logging
- API handling
- role checking

---

# 📌 Interview Definition 🎤

A Higher Order Component (HOC) is a function that takes a component as input and returns a new enhanced component with additional functionality.

---

# 📌 Final Summary

| Concept | Meaning |
|---|---|
| HOC | Function that returns enhanced component |
| withAuth | Authentication HOC |
| withMessage | Message wrapper HOC |
| Props Forwarding | Passing props to wrapped component |
| Outer Function | Receives component |
| Inner Function | Receives props |

🔥