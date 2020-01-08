import React from 'react';
import './App.css';
import Generate from "./generate";
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from "./mydocument";
import ReactPDF from '@react-pdf/renderer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generate: false,
      showText: false
    }
  }



  generate = (e) => {
    e.preventDefault();
    this.setState({generate: true});
    

  }

  showText = (e) => {
    e.preventDefault();
    this.setState({showText: true});
  }

  render() {
    return (
      <div className="App">
       <h1>PDFCreator</h1>
       <span>This is a simple PDF creator. Just type your text in textarea and click "Generate"</span>
       <Generate generate={this.state.generate} showText={this.state.showText}/>
       <button onClick={this.generate}>Generate</button>
       <button onClick={this.showText}>Show text</button>
      </div>
    )
  }


}

export default App;
