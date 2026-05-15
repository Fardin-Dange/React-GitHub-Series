import { useEffect, useRef, useState } from "react";


const App = () => {
  const inputRef = useRef(null);

  const rerenderCount = useRef(0);

  let [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current); //input element
    console.log(inputRef.current.value); //value of the input element
    // inputRef.current.value = ""; //clear the input field after submission

    setName(inputRef.current.value); //update the name state with the current value of the input field
    rerenderCount.current++; //increment the rerender count on each submission
    console.log(rerenderCount.current);
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h1>useRef Hook in React</h1>

      <form  onSubmit={handleSubmit}>
       Name :  <input type="text" ref={inputRef} />
       <button type="submit" >Submit</button>
      </form>

      <h1> Welcome to Goa {name}</h1>

    </div>
  )
}

export default App
