import About from "./components/About";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
   <>
   <div className="container" style={{maxWidth:"100%",maxHeight:"100%",margin:"0px",padding:"0px"}}>

   <Navbar/>
   <Homepage/>
   <About/>
   </div>
   </>
    
  );
}

export default App;
