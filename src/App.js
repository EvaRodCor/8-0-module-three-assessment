import React from "react";
import "./App.css";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";
import Home from "./components/Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {  }
  }
  render() { 
    return ( 
      <nav className="App">
        <NavBar/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/movies" component={Movies}/>
          <Route path="/people" component={People}/>
          <Route path="/locations" component={Locations}/>
      </Switch>
      </nav>
    );
  }
}

export default App;