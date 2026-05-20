import React from 'react'

const withProps = (Component) => {
   
   return  ({name}) => {
        return <Component name={name}/>
   }
}

export default withProps
