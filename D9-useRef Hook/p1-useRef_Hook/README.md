# D9 - useRef in React

## What is useRef?
useRef is a React Hook that is used for two main purposes:
1. Accessing DOM elements directly
2. Storing values without causing re-renders

## Why useRef — Why Not Direct DOM Access?
React is a DOM manager — it manages the DOM itself.
If we directly modify the DOM, React doesn't know about 
that change, which creates ambiguity and conflicts.
Hence we use useRef — which gives us a safe reference 
to the DOM element that React is aware of.

## Syntax:
```jsx
// Step 1 — Create useRef
const inputRef = useRef(null)

// Step 2 — Attach to DOM element
<input ref={inputRef} type="text"/>

// Step 3 — Use it
inputRef.current.focus()    // focus
inputRef.current.value      // get value
inputRef.current.value = "" // clear
```

## useRef for Value Storage:
```jsx
const renderCount = useRef(0)
renderCount.current++ // value changes — no re-render! ✅
```

## useState vs useRef:
| useState | useRef |
|---|---|
| Value change → re-render | Value change → no re-render |
| For UI updates | For background value tracking |

## useRef Object:
```jsx
const ref = useRef(0)
// ref = { current: 0 }
```