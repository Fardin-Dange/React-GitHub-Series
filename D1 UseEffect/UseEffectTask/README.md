## useEffect ke 3 Types — Simple 😊

---

### 1️⃣ No Dependency Array

useEffect(() => {
  console.log("render hua");
});


Component **jab bhi re-render ho** — ye chalega.

---

### 2️⃣ Empty Dependency Array `[]`


useEffect(() => {
  console.log("sirf ek baar chala");
}, []);


Component **pehli baar load ho** — sirf tabhi chalega. Dobara nahi.

---

### 3️⃣ Value ke saath `[value]`


useEffect(() => {
  console.log("name badla:", name);
}, [name]);


**`name` jab bhi change ho** — tabhi chalega. Koi aur cheez change ho toh nahi chalega.

---

Bas itna hi hai Fardin bhai —

- **No array** → har baar
- **Empty array** → ek baar
- **Value array** → jab wo value change ho
