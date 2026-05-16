import { memo } from "react";

const Button = memo(({handleClick, label}) => {
  console.log(`${label} button render hua`)  // ye add karo
  return (
    <div>
        <button onClick={handleClick}>{label}</button>
    </div>
  )
})

export default Button;