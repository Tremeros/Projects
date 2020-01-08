import React from 'react';
import './App.css';
import {Header} from "./Components/header";
import {Form} from "./Components/form";
import {SelectForm} from "./Components/select";
import {Browser} from "./Components/browser";

function App() {
  return (
    <div className="App">
     <h1>Hello react!</h1>
     <span>I'm learning to react exam.</span>
     <Header />
     <Form />
     <SelectForm />
     <Browser />
    </div>
  );
}

export default App;
