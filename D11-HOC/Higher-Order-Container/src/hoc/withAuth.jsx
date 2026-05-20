import React from 'react'

const withAuth = (Component) => {
    return () => {
        const isAuthenticated = true; // Simulating authentication status

        if (isAuthenticated) {
            return <>
                <h1>Welcome to the Protected Component</h1>
                 <Component />
                </> 
           ;
        } else {
            return <h1>Please log in to access this content.</h1>;
        }   
    }
}

export default withAuth
