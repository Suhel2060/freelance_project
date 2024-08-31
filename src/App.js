
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import Home from "./components/main_components/Home";
import Navbar from "./components/home_components/Navbar";
import About from "./components/main_components/About";


function App() {
  return (
    <>
      <div className="container" style={{ maxWidth: "100%", maxHeight: "100%", margin: "0px", padding: "0px" }}>
        <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        </Routes>
        </Router>

      </div>
    </>

  );
}

export default App;
