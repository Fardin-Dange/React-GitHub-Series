# D13 - Custom Hooks in React

## What is a Custom Hook?
A custom hook is a reusable JavaScript function that 
contains common logic built using React's built-in hooks 
like useState, useEffect etc. Instead of writing the same 
logic in multiple components, we write it once in a custom 
hook and reuse it anywhere.

## Rule:
Custom Hook name must always start with "use" — 
React identifies it as a hook by this prefix.
useFetch ✅
useLocalStorage ✅
getData ❌ — not a hook

## Problem Without Custom Hooks:
Same API calling logic written in every component:
- UserList → useState + useEffect + fetch 😬
- ProductList → useState + useEffect + fetch 😬
- OrderList → useState + useEffect + fetch 😬

## Solution With Custom Hooks:
Write once in useFetch — use everywhere:
- UserList → useFetch("url/users") ✅
- ProductList → useFetch("url/products") ✅
- OrderList → useFetch("url/orders") ✅

## Custom Hooks Built:

### 1. useFetch
Reusable API calling hook.

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
  }, [url])

  return { data, loading }
}

Usage:
const { data, loading } = useFetch("https://api.com/users")

### 2. useLocalStorage
Reusable Local Storage hook.

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key)
    return stored ? stored : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, value)
  }, [value])

  return { value, setValue }
}

Usage:
const { value, setValue } = useLocalStorage("name", "Fardin")

## Return Types:
Object return → {} destructuring
Array return  → [] destructuring

## Interview Answer:
"A Custom Hook is a reusable function in React that 
starts with 'use' and contains common logic built 
using built-in hooks. It solves the problem of code 
duplication — instead of writing the same logic in 
multiple components, we write it once in a custom hook 
and reuse it anywhere in the application."