import React, { Component } from 'react'

export default class List_items extends Component {


  render() {
    return (
      <div>
        List items

        <ol> 
        {
          this.props.items.map(el=>{

          return  <li>
              {el} </li> 
          })
        }

        </ol> 
      </div>
    )
  }
}
