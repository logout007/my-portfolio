import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/NavBar"
import SocialLinks from "./components/SocialLinks";
import { useState } from "react";
import Toast from "./components/toast";
function App() {
  const [showtoast , setShowtoast] = useState(false)
  console.log("logging state value",showtoast);
  return (
    <div className="scroll-smooth">
      <Navbar/>
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact setShowtoast= {setShowtoast} />
      <SocialLinks />

      {
        showtoast ? <><Toast setShowtoast ={setShowtoast}></Toast></> : <></>
      }
    </div>
  );
}

export default App;
