import { useState } from "react";
import Cards from "./components/Cards/Cards";
import Inputs from "./components/Inputs/Inputs";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home data={data} setData={setData} />
          </Route>
          <Route path="/cards">
            <Cards data={data} setData={setData} />
          </Route>
          <Route path="/inputs">
            <Inputs data={data} setData={setData} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
