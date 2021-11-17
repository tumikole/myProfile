import "./App.css";
import Home from "./Components/HomePage";
import Side2 from "./Components/Side2Contents"


function App() {
  return (
    <div className="App">
      <h1 style={{ color:"white", padding: "2rem", marginTop: "0", fontSize: "2rem"}}>
        Hi there!!! My name is Ramollo Tumisang, <span style={{ color: "#51d2b7" }}> Welcome to my PROFILE</span>
      </h1>
      <hr />
      <div className="AppGrid">
      <div className="AppGridSide1">
     <Home/>
    </div>
    <div className="AppGridSide2"> 
<Side2 />
    </div>
    </div>
    </div>
  );
}

export default App;
