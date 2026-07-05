import React, { lazy, Suspense } from 'react'
import About from './About' //Normal Loading of the component
import { Route, Routes } from 'react-router-dom';
// import Dashboard from './Pages/Dashboard';

const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Home = lazy(() => import("./Pages/Home"));
const We = lazy(() => import("./Pages/We"));

const App = () => {
  return (
    <div>
      <About/>
      <Suspense fallback = {<h1>Loading ! ......</h1>}>

        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/dashboard" element={<Dashboard/>}/>
          <Route path= "/we" element={<We/>}/>

        </Routes>

      </Suspense>
    </div>
  )
}

export default App
