  import { Route, Routes } from "react-router-dom"
  import Navbar from "./Components/Navbar"
  import Home from "./Page/Home/Home"
  import Layout from "./Features/Layout"
import Gallery from "./Components/Home/Gallery"



  function App() {
  

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
