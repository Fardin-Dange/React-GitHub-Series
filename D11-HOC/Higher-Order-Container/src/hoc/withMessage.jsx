import React from 'react'

const withMessage = (Component) => {
  return () => {
    
    return <>
                <h1>This is a message from the Higher-order Component</h1>
                  <Component /> 
           </>    
  }
}

export default withMessage
