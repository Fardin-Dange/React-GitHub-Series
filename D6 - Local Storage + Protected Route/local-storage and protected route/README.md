# React Notes — Local Storage & Protected Routing 🔐

---

# 📘 What is Local Storage?

Local Storage is a browser storage used to store data permanently in key-value format.

The data remains saved even after:
- page refresh
- browser close

---

# 📌 Local Storage Syntax

## Store Data

```js
localStorage.setItem("name", "Fardin");
```

---

## Get Data

```js
localStorage.getItem("name");
```

---

## Remove Specific Data

```js
localStorage.removeItem("name");
```

---

## Clear All Data

```js
localStorage.clear();
```

---

# ⚠️ Important Point

Local Storage stores only STRING data.

To store objects:
- JSON.stringify()
- JSON.parse()

---

# 📌 Store Object in Local Storage

```js
const user = {
  username: "Fardin"
}

localStorage.setItem("user", JSON.stringify(user));
```

---

# 📌 Get Object from Local Storage

```js
const user = JSON.parse(localStorage.getItem("user"));
```

---

# 📘 What is Protected Routing?

Protected Routing is used to prevent unauthorized users from accessing private pages.

Examples:
- Dashboard
- Profile
- Admin Panel

---

# 🔄 Authentication Flow

```text
Login Success
      ↓
Store User in Local Storage
      ↓
Protected Route Checks Authentication
      ↓
If Valid → Dashboard
Else → Login Page
```

---

# 📌 Protected Route Example

```js
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  if(
    user?.username === "admin@123" &&
    user?.password === "admin"
  ){
    return <Outlet/>
  }

  return <Navigate to='/'/>
}

export default ProtectedRoute
```

---

# 📘 What is Session Expiry?

Session Expiry means automatically logging out the user after a certain time.

---

# 📌 Expiry Time Example

```js
expiry: Date.now() + 30 * 1000
```

---

# 📌 Explanation

```text
1 second = 1000 milliseconds

30 seconds = 30 * 1000
```

---

# 📌 Login With Expiry

```js
const userData = {
  username: user.username,
  password: user.password,
  expiry: Date.now() + 30 * 1000
}

localStorage.setItem("user", JSON.stringify(userData));
```

---

# 📌 Expiry Check in Protected Route

```js
if(
  user?.username === "admin@123" &&
  user?.password === "admin" &&
  user?.expiry > Date.now()
){
   return <Outlet/>
}
```

---

# 📌 Auto Logout Logic

```js
localStorage.removeItem("user");

return <Navigate to='/'/>
```

---

# 📘 Important Concepts Learned

✅ Local Storage  
✅ Protected Routing  
✅ Session Expiry  
✅ Auto Logout  
✅ Navigate Component  
✅ Outlet Component  
✅ JSON.stringify()  
✅ JSON.parse()  
✅ React Router DOM  
✅ Context API

---

# 📘 Best Practices

✅ Use `===` instead of `==`  
✅ Use `Date.now()` instead of `new Date().getTime()`  
✅ Use `removeItem()` instead of `clear()`  
✅ Remove unused imports  
❌ Do not store passwords in Local Storage in real applications

---

# 📘 Difference Between localStorage and sessionStorage

| localStorage | sessionStorage |
|---|---|
| Permanent until removed | Removed after tab close |
| More commonly used | Less commonly used |

---

# 📘 Important Interview Questions

## Q1. What is Local Storage?
Local Storage is browser storage used to store data permanently.

---

## Q2. Why use Protected Routing?
To prevent unauthorized access to private routes.

---

## Q3. Why use JSON.stringify()?
Because Local Storage stores only string data.

---

## Q4. What is Session Expiry?
Automatically logging out the user after a certain time.

---

# 🚀 Real Industry Concepts

Real applications use:
- JWT Token
- Backend Authentication
- Cookies
- Redux Toolkit
- Role Based Routing
- Refresh Tokens

---

# ✨ Final Summary

Protected Routing and Local Storage are used to:
- manage authentication
- protect private routes
- store login data
- implement session expiry
- create auto logout systems

These concepts are the foundation of modern React Authentication Systems.