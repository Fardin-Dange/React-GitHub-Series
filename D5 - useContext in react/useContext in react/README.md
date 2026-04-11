# D5 - useContext in React

## What is Prop Drilling?
When we have to pass data from parent to child through multiple 
intermediate components which don't even use that data — 
this is called Prop Drilling.

## What is useContext?
useContext is a React Hook that solves the prop drilling problem.
Any component can directly access the data without passing 
props through every level.

## 3 Steps to use useContext:

### Step 1 — Create Context
```jsx
export const UserContext = createContext(null)
```

### Step 2 — Wrap with Provider
```jsx
const [user, setUser] = useState("Fardin")

<UserContext.Provider value={user}>
  {/* all components here */}
</UserContext.Provider>
```

### Step 3 — Use in any Component
```jsx
const user = useContext(UserContext)
```

## Important Points:
- Create context in a separate file to avoid circular imports
- Always pass state in Provider value — not normal variable
- Any component inside Provider can access data — nested or normal
- useState cannot be used in main.jsx — only in function components





# 📘 React Children (Notes)

## 🔹 What is `children`?

`children` is a special prop in React used to pass and render nested content inside a component.

When elements are placed between the opening and closing tags of a component, React automatically stores them in the `children` prop.

---

## 🔹 Example

```jsx
<Dashboard>
  <Profile />
</Dashboard>
````

👉 Internally, React converts it to:

```jsx
<Dashboard children={<Profile />} />
```

---

## 🔹 Syntax

```jsx
const Dashboard = ({ children }) => {
  return (
    <div>
      <h3>This is Dashboard</h3>
      {children}
    </div>
  );
};


## 🔹 Key Points

* `children` is a **reserved and special prop** in React
* It **cannot be renamed**
* It can hold:

  * A single element
  * Multiple elements
  * Text, JSX, or components
* Common use cases:

  * Wrapper components
  * Layout components
  * Reusable UI components

---

## 🔹 Multiple Children Example

```jsx
<Dashboard>
  <Profile />
  <h4>Hello</h4>
  <button>Click Me</button>
</Dashboard>
```

---

## 🔹 Output

```
This is Dashboard
This is Profile
Hello
Click Me
```

---

## 🔹 Important Rule

❗ If `{children}` is not rendered inside the component, the nested content will not be displayed.

---

## 🔹 Children vs Props

| Feature        | Children            | Props                   |
| -------------- | ------------------- | ----------------------- |
| Passing method | Inside component    | Attributes              |
| Rename allowed | ❌ No                | ✅ Yes                   |
| Example        | `<Comp>Data</Comp>` | `<Comp data="value" />` |

---

## 🔹 Real-life Analogy

* Dashboard = Container
* Profile = Content inside the container

The container must render `{children}` to display its content.

---

## 🔥 Interview Line

> "children is a special prop in React used to pass and render nested components."

