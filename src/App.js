import "./App.css";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import {BrowserRouter as Router, useRoutes} from "react-router-dom"

const Header =  () => {
  let Routes = useRoutes([
{ path:"/home", element:<Home /> },
{ path:"gallery", element:<Gallery /> }
  ])
  return Routes
}

function App() {
  return (
    <div className="App">
      <Router >
            <Header/>
            <Home />
      </Router>
    </div>
  );
}

export default App;
