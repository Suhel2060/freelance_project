import About from "./components/About";
import ClientSection from "./components/ClientSection";
import CompanyDetail from "./components/CompanyDetail";


import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Visualization from "./components/Visualization";

function App() {
  return (
    <>
      <div className="container" style={{ maxWidth: "100%", maxHeight: "100%", margin: "0px", padding: "0px" }}>

        <Navbar />
        <Homepage />
        <About />
        <div style={{backgroundImage: "linear-gradient(180deg, #EEF8FF 0%, #EEF8FF 100%)" }}>
          <ClientSection />
          <Visualization />
          <CompanyDetail/>
        </div>

      </div>
    </>

  );
}

export default App;
