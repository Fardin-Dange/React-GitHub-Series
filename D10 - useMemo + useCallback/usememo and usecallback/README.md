# D10 — useMemo + useCallback + React.memo 📘😎

---

# 📌 Why Optimization is Needed in React?

React applications work using:
# re-rendering

Whenever:
- state changes
- props change

React component function:
# executes again 😄

---

# Example

```js
const App = () => {

   console.log("render");

}
```

Whenever state updates:

```text
render
```

prints again because component re-renders.

---

# 📌 Problem 😵

When component re-renders:
- heavy calculations run again
- functions recreate again
- child components re-render again

Even when not needed.

This affects:
# performance 🚀

---

# 📌 Memoization

## Definition

Memoization means:
# storing/caching previous result
and reusing it instead of recalculating.

---

# Real Life Example 😄

Without memoization:

```text
Same math problem solved again and again 😵
```

With memoization:

```text
Answer notebook me already stored 😎
```

---

# 📌 useMemo()

## Definition

`useMemo()` is a React Hook used to:
# memoize/cache calculated values

so that expensive calculations do not run on every render.

---

# Syntax

```js
const value = useMemo(() => {

   return calculation

}, [dependency])
```

---

# Structure Understanding

| Part | Meaning |
|---|---|
| function | calculation |
| dependency array | when recalculation should happen |

---

# Important Rule

## Dependency changed:
✅ recalculation

## Dependency same:
✅ old cached value reused

---

# Example

```js
const result = useMemo(() => {

   return heavyCalculation(number)

}, [number])
```

---

# Workflow

## Initial Render

```text
heavyCalculation runs
value gets cached
```

---

## count changes

```text
App re-renders
BUT number same
→ old cached value reused 😎
```

No heavy calculation.

---

## number changes

```text
dependency changed
→ heavyCalculation runs again 😄
```

---

# Purpose of useMemo

Used to:
- avoid unnecessary calculations
- improve performance
- cache expensive values

---

# Real Industry Usage

Used in:
- filtering large data
- sorting
- analytics
- dashboards
- expensive loops

---

# 📌 Important Understanding

Without useMemo:

```text
Every render
→ heavy calculation 😵
```

With useMemo:

```text
Only dependency change
→ heavy calculation 😎
```

---

# 📌 useCallback()

## Definition

`useCallback()` is a React Hook used to:
# memoize/cache functions

so that the same function reference is reused between renders.

---

# Why useCallback Needed?

In JavaScript:
# functions are objects 😄

---

# Example

```js
const f1 = () => {}

const f2 = () => {}
```

---

# Compare

```js
console.log(f1 === f2)
```

Output:

```text
false
```

Because both are different function objects.

---

# Same Thing Happens in React 😎

```js
const handleClick = () => {}
```

Whenever component re-renders:
# new function object gets created 😵

---

# Problem

New function reference means:
# props changed 😵

which causes:
# child re-render

---

# Solution 🚀

# useCallback()

---

# Syntax

```js
const func = useCallback(() => {

}, [dependency])
```

---

# Example

```js
const incrementCount = useCallback(() => {

   setCount(prev => prev + 1)

}, [])
```

---

# Important Rule

## Dependency changed:
✅ new function created

## Dependency same:
✅ same function reused

---

# 📌 Stale Closure Problem

Wrong:

```js
setCount(count + 1)
```

Why wrong?

Because old state value gets stored in closure.

---

# Correct

```js
setCount(prev => prev + 1)
```

This always uses:
# latest state value 😎

---

# 📌 React.memo()

## Definition

`React.memo()` is used to:
# prevent unnecessary child component re-renders

---

# Syntax

```js
const Button = memo((props) => {

})
```

---

# Working

## Props changed:
✅ child re-render

## Props same:
❌ child render skipped

---

# Important Understanding

Normally:

```text
Parent re-render
→ Child also re-render 😵
```

Even if props visually same look.

---

# Why? 😄

Because function props:
# new references 😵

---

# Example

```js
<Button handleClick={handleClick}/>
```

Without useCallback:

```text
new function reference every render
```

So:

```text
React thinks props changed 😵
```

---

# Perfect Combination 🚀

| Hook | Work |
|---|---|
| useMemo | Memoizes value |
| useCallback | Memoizes function |
| React.memo | Prevents child re-render |

---

# 📌 Complete Workflow

---

# Initial Render

```text
App renders
↓
heavyCalculation runs
↓
buttons render
```

---

# Count Button Click

```text
setCount()
↓
App re-renders
```

---

# useMemo

```text
number same
→ old cached value reused 😎
```

No heavy calculation.

---

# useCallback

```text
same function references 😎
```

---

# React.memo

```text
props same
→ child render skipped 😎
```

---

# Final Result

```text
Only parent component re-renders 😎
```

---

# Number Button Click

```text
setNumber()
↓
App re-renders
```

---

# useMemo

```text
number changed
→ heavyCalculation runs 😄
```

---

# useCallback

```text
same function references
```

---

# React.memo

```text
props same
→ child render skipped 😎
```

---

# 📌 Most Important Final Understanding 🚀

React optimization goal:

```text
Only necessary things should re-render 😎
```

NOT:

```text
Everything should re-render 😵
```

---

# 📌 Interview Definitions

## useMemo

useMemo is used to memoize calculated values and avoid unnecessary recalculations.

---

## useCallback

useCallback is used to memoize functions and maintain the same function reference between renders.

---

## React.memo

React.memo prevents unnecessary child component re-renders by comparing props.

---

# 📌 Final Summary

| Hook | Purpose |
|---|---|
| useMemo | Cache calculated values |
| useCallback | Cache functions |
| React.memo | Prevent unnecessary child renders |

🔥