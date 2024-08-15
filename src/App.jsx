import React, { useState, useEffect } from 'react';
  import { Route, Routes } from "react-router-dom"
  import Navbar from "./Components/Navbar"
  import Home from "./Page/Home/Home"
  import Layout from "./Features/Layout"
import Gallery from "./Components/Home/Gallery"
import Loader from './Components/Loader';



  function App() {
  
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a loading delay
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // Adjust the delay as needed
  
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return <Loader />;
    }
  

    return (
      

      <Routes>
        <Route path="/" element={<Layout />}>
      <Route  exact path="/" element={<Home />}/>
      <Route  exact path="/projects" element={<Gallery />}/>
      </Route>
      </Routes>
    )
  }

  export default App
