import React from "react";


class SelectForm extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
          name: ""
       }
   }

   handleValue = (e) => {
     this.setState({name: e.target.value})
   }

  render() {
      return (
         <div>
             <form>
          <select value={this.state.name} onChange={this.handleValue}>
              <option value="Pierwsza opacja">Pierwsza opcja</option>
              <option value="Druga opcja">Druga opcja</option>
              <option value="trzecia opcja">trzecia opcja</option>
          </select>
         </form> 
         <button onClick={this.handleValue}>Dodaj</button>
         <span>{this.state.name}</span>
         </div>           
      )
  }

}


export {SelectForm}