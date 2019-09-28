import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import SmurfContext from "../contexts/smurfContext";
import SmurfList from "./SmurfList";
import AddSmurf from "../components/AddSmurf";

function App() {
  const [smurfs, setSmurfs] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => setSmurfs(res))
      .catch(err => console.log(err));
  }, []);

  console.log(smurfs);

  return (
    <SmurfContext.Provider value={{ smurfs }}>
      <div className="App">
        <h1>Welcome To Smurf Village</h1>
        <h2>Current Residents:</h2>
        <AddSmurf />
        <SmurfList />
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
