import React from 'react';
import './App.css';
import Main from "./components/main";
import { PDFViewer } from '@react-pdf/renderer';





function App() {
  return (
  <div>
    <h1 className="title">Invoice maker</h1>
    <div className="main">Program do tworzenia faktur - w budowie</div>
    <Main />
  </div>
  );
}

export default App;
