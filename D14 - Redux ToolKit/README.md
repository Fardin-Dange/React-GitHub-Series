# D14 - Redux Toolkit

## What is Redux?

Redux is a State Management Library used to manage and share data across an application.

It stores application data in one central place called the Store.

Redux helps avoid Prop Drilling and makes data sharing between components easier.

### Definition

Redux is a predictable state container for JavaScript applications.

---

# Why Redux?

Without Redux, data is passed from Parent Component to Child Component through Props.

Example:

App → Home → Product → Cart

If Cart needs data from App, the data must pass through every intermediate component.

This is called Prop Drilling.

### Problem

```text
App
 ↓
Home
 ↓
Product
 ↓
Cart
```

Passing props through multiple components makes code difficult to maintain.

### Solution

Redux provides a Central Store.

```text
Navbar
Cart
Profile
Home
  │
  ▼
 Store
```

Any component can directly access data from the Store.

---

# Redux vs useContext

| useContext              | Redux Toolkit                      |
| ----------------------- | ---------------------------------- |
| Suitable for small apps | Suitable for medium and large apps |
| Simple state sharing    | Complex state management           |
| Less setup              | More structured                    |
| Limited scalability     | Highly scalable                    |

---

# What is Redux Toolkit?

Redux Toolkit (RTK) is the official and recommended way of using Redux.

It simplifies Redux development by reducing boilerplate code and automatically generating actions and reducers.

### Benefits

* Less Code
* Easy Setup
* Better Readability
* Faster Development
* Officially Recommended
* Automatic Action Creation

---

# Core Concepts

## 1. Store

Store is the Central Data Repository of the application.

It contains the complete application state.

Example:

```js
{
  user: {},
  cart: {},
  theme: {}
}
```

### Real Life Example

Store is like a Bank.

All account information is stored in one place.

---

## 2. Slice

A Slice is a small section of the Store dedicated to a specific feature.

Example:

```text
Store
│
├── userSlice
├── cartSlice
├── themeSlice
└── counterSlice
```

Each Slice manages its own state and logic.

---

## 3. State

State is the current data of the application.

Example:

```js
{
  value: 0
}
```

State changes whenever the user interacts with the application.

---

## 4. Action

An Action tells Redux what operation should be performed.

Examples:

```js
increment()
decrement()
changeTheme()
addToCart()
```

Action = What to Do

---

## 5. Reducer

Reducer contains the logic that updates the state.

Example:

```js
increment: (state) => {
  state.value += 1;
}
```

Reducer = How to Do

### Reducer Responsibility

```text
Old State
    ↓
Update Logic
    ↓
New State
```

---

## 6. Dispatch

Dispatch sends an action to Redux.

Example:

```js
dispatch(increment())
```

Without dispatch, actions will never reach reducers.

Dispatch = Send Action

---

# createSlice()

createSlice() is used to create a Slice.

It automatically generates:

1. Actions
2. Reducers

Syntax:

```js
createSlice({
  name,
  initialState,
  reducers
})
```

Example:

```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } =
  counterSlice.actions;

export default counterSlice.reducer;
```

---

# configureStore()

configureStore() creates the Redux Store.

Example:

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

---

# Provider

Provider connects Redux Store to the React Application.

Without Provider, Redux cannot be accessed inside React components.

Example:

```jsx
import { Provider } from "react-redux";

<Provider store={store}>
  <App />
</Provider>
```

---

# React Redux Hooks

## useSelector()

Used to read data from the Store.

Example:

```js
const count = useSelector(
  (state) => state.counter.value
);
```

Flow:

```text
Store
  ↓
useSelector
  ↓
Component
```

### Remember

useSelector = Read Data

---

## useDispatch()

Used to send actions to Redux.

Example:

```js
const dispatch = useDispatch();

dispatch(increment());
```

### Remember

useDispatch = Update Data

---

# Redux Toolkit Flow

Complete Flow:

```text
User Click
    ↓
dispatch(action)
    ↓
Reducer Executes
    ↓
Store Updates
    ↓
Component Re-renders
```

OR

```text
Component
    ↓
Dispatch
    ↓
Reducer
    ↓
Store
    ↓
UI Update
```

---

# Counter Example

Initial State:

```js
{
  value: 0
}
```

Reducer:

```js
increment: (state) => {
  state.value += 1;
}
```

Output:

```text
0
1
2
3
4
```

---

# Theme Toggle Example

Initial State:

```js
{
  vMode: "light"
}
```

Reducer:

```js
changeMode: (state) => {
  state.vMode =
    state.vMode === "light"
      ? "dark"
      : "light";
}
```

Output:

```text
light
↓
dark
↓
light
↓
dark
```

---

# Important Interview Questions

### What is Redux?

Redux is a state management library that stores application data in a centralized Store.

---

### What is Redux Toolkit?

Redux Toolkit is the official and modern way of using Redux that reduces boilerplate code and simplifies state management.

---

### What is Store?

Store is the central repository where the entire application state is stored.

---

### What is Slice?

A Slice is a feature-specific part of the Store that contains state and reducers.

---

### What is State?

State is the current data of the application.

---

### What is an Action?

An Action tells Redux what operation needs to be performed.

---

### What is a Reducer?

A Reducer contains the logic to update the state.

---

### What is Dispatch?

Dispatch sends an action to Redux for state updates.

---

### What does useSelector do?

useSelector reads data from the Redux Store.

---

### What does useDispatch do?

useDispatch sends actions to Redux.

---

# Quick Revision (Most Important)

```text
Redux = Global State Management

Store = Central Data Storage

Slice = State + Reducers

State = Current Data

Action = What to Do

Reducer = How to Do

Dispatch = Send Action

Provider = Connect Redux with React

useSelector = Read Data

useDispatch = Update Data

Redux Toolkit = Modern Redux
```

# D14 - Redux Toolkit

## What is Redux?
Redux is a state management library for React.
It stores all app data in one central place called Store.
It is used for large apps where useContext is not enough.

## Redux vs useContext:
useContext → Simple apps, small data
Redux → Large apps, complex data management

## Core Concepts:

### 1. Store
Central storage where all data is kept.
Like a bank — all accounts in one place.

### 2. Slice
A piece of store for one feature.
Contains name, initialState, and reducers.

### 3. Action
A function that tells the store what to do.
Like a bank transaction — deposit or withdraw.

### 4. Reducer
Logic that updates the state based on the action.
Like a bank manager — processes transactions.

## Flow:
Button clicked → dispatch(action) → Reducer updates state → Store updated → Component gets new data

## Files Created:

### counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 }
  }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer

### store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export default store

### main.jsx
import { Provider } from 'react-redux'
import store from './store/store'

<Provider store={store}>
  <App />
</Provider>

### App.jsx
const count = useSelector((state) => state.counter.value)
const dispatch = useDispatch()

dispatch(increment())
dispatch(decrement())

## Hooks:
useSelector → Get data from store
useDispatch → Send action to store

## Interview Answer:
"Redux is a state management library that stores all 
app data in one central place called Store. It has 
three main concepts — Store (central storage), 
Actions (what to do), and Reducers (how to update). 
We use useSelector to get data from store and 
useDispatch to send actions to update the store."