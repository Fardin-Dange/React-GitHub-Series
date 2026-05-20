import React from 'react'
import withMessage from './hoc/withMessage';
import Home from './components/Home';
import withAuth from './hoc/withAuth';
import withProps from './hoc/withProps';
import Dashborad from './components/Dashborad';

const App = () => {
  // const EnhancedComponent = withMessage(Home);
  const ProtectedHome = withAuth(Home);
  //passing props to the component

  const Ecomponent = withProps(Dashborad);
  return (
    <div>
      {/* <EnhancedComponent/> */}
      {/* <ProtectedHome/> */}
        <Ecomponent name="Fardin"/>
    </div>
  )
}

export default App
