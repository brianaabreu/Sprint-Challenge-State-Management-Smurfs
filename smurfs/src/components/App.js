import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./smurfForm";
import Smurfs from "../components/smurfs";
import AddSmurf from "../components/addSmurf";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Build a Smurf!</h1>
        <SmurfForm />
        <Smurfs />
        <AddSmurf />
      </div>
    );
  }
}

export default App;
