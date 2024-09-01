
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import Home from "./components/main_components/Home";
import Navbar from "./components/main_components/Navbar";
import About from "./components/main_components/About";
import Services from "./components/main_components/Services";
import Contact from "./components/main_components/Contact";
import Footer from "./components/main_components/Footer";


function App() {
  return (
    <>
      <div className="container" style={{ maxWidth: "100%", maxHeight: "100%", margin: "0px", padding: "0px" }}>
        <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/service" element={<About/>}/>
        <Route exact path="/about" element={<Services/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        
        </Routes>
        <Footer/>
        </Router>

      </div>
    </>

  );
}

export default App;
