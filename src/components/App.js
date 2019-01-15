import React, { Component } from 'react'
import reactDom from 'react-dom'
import List_items from './List_items';
import Add_items from './Add_items';

import './App.css'



class App extends Component {
   
    constructor(props){
        super(props); 

        this.state ={
            items:["item 1", "item 2"]
        }


    }

onFormSubmit_update=(e)=>{
    console.log(e)
  
    const temp = this.state.items; 
    temp.push(e)
    this.setState({
        items:temp
      })
}

  render() {
      
    return (
        <div>
        <div className="leftCol"> 
            <List_items items={this.state.items} /> 
        </div>
        <div className="rightCol"> 
            <Add_items onFormSubmit={this.onFormSubmit_update}/> 
        </div>
    </div> 
    )
  }
}

export default App; 