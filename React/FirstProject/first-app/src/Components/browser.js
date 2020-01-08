import React from 'react';


class Browser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ["ania", "kasia", "basia", "janek", "przemek", "wojtek", "paweł", "piotrek"],
            text: ""
        }
    }

    browsList = (e) => {
     this.setState({text: e.target.value})
    }
  


   render() {
       return (
           <div>
             <input type="text" value={this.state.text} onChange={this.browsList}></input>
             <ul>{
                 this.state.list.map(el => {
                     if(el.includes(this.state.text)) {
                         return <li>{el}</li>
                     }
                 })
                 }</ul>
           </div>
       )
   }

}


export {Browser};