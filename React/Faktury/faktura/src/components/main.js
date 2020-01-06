import React from 'react';
import '../main.css';
import MyDocument from "../pdf";
import { PDFViewer } from '@react-pdf/renderer';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invoice: false,
      name: "",
      companyName: ""
    }
  }

changeHandler = (e) => {
  e.preventDefault();
  this.setState({[e.target.name]: e.target.value})
}
generateInvoice = (e) => {
  e.preventDefault();
  this.setState({invoice: true})
}

  render() {
    return (
      <div className="mainForm">
        <h2>Wprowadź dane do faktury:</h2>
        <input className="input" name="name" value={this.state.name} onChange={this.changeHandler}/>
        <input className="input" name="companyName" value={this.state.companyName} onChange={this.changeHandler}/>
        <button onClick={this.generateInvoice}>Generuj</button>
        {this.state.invoice && <PDFViewer><MyDocument name={this.state.name} company={this.state.companyName}/></PDFViewer>}
      </div>
    )
  }
}



export default Main;
