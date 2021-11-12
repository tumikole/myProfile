import "./App.css";
import Home from "./Components/HomePage";
function App() {
  return (
    <div className="App">
      <h1 style={{ padding: "2rem", marginTop: "0" }}>
        Welcome to my <span style={{ color: "red" }}>PROFILE</span>
      </h1>
      <hr />
      <Home/>
    </div>
  );
}

export default App;
