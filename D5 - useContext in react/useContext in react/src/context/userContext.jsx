import { createContext } from "react";

const userContext = createContext(null);

// create context ek function hai react me jo hame context create karke deta hai yeh context
//ek dabba hai jisme ham data store kar sakte hai aur us data ko kisi bhi component me access kar sakte hai bina props ke through pass kiye hue

//abhi yaha hame ne us dabbe me null value store ki hai lekin jab ham is context ko use karenge to ham isme data store karenge aur us data ko kisi bhi component me access kar sakenge

export default userContext;