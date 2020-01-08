import React from 'react';
import './App.css';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from "./mydocument";

class Generate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  handleTextChange = (e) => {
    e.preventDefault();
    this.setState({text: e.target.value})
  }


  render() {
    if(this.props.generate) {
      return (
        <PDFViewer>
          <MyDocument text={this.state.text}/>
        </PDFViewer>
      )
    } else if(this.props.showText) {
      return <p>{this.state.text}</p>
    } else {
      return <textarea value={this.state.text} onChange={this.handleTextChange} />
    }


  }


}


export default Generate;
