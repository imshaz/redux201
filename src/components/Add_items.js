import React, { Component } from 'react'

export default class Add_items extends Component {
  constructor(props){
    super(props); 

    this.state=({
      itemName:""
    })
  }
  onFormSubmit =(e)=>{
    e.preventDefault(); 
    console.log(e.target.itemname.value);

    this.props.onFormSubmit(e.target.itemname.value)
    console.log("submit");

    
  }

  onTextChange =(e)=> {
    e.preventDefault(); 
    this.setState({
      itemName:e.target.value
    })
    console.log("onTextChange");
    
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}> 
            <label labelFor="itemname"> Item Name: </label> 
            <input onChange={this.onTextChange} type="text" name="itemname" value={this.state.itemName} /> 

          </form> 
      </div>
    )
  }
}
