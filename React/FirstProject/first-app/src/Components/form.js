import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            list: []
        }
    }
   
   changeName = (e) => {
       this.setState({name: e.target.value})
   }

   addText = (e) => {
       e.preventDefault();
       this.list = [...this.state.list, this.state.name];
       this.setState({list: this.list, name: ""})
       
   }


  render() {
      return (
          <div>
            <form>
              <input type="text" value ={this.state.name}  onChange={this.changeName}></input>
            </form>
            <button type="submit" onClick={this.addText}>Dodaj</button>
            <div>{this.state.list.map((el, index) => {return <span key={index}>{el}<br /></span>})}</div>
          </div>
      )
  }

}

export {Form}