import React, { Component } from 'react'

 class Messege extends Component {
    state ={
        name:"Dhanajaya"
      }
      render() {
        return (
          <div>
           <h2>name:{this.state.name}</h2>
            <hr/>
            
          </div>
        )
      }
    }
    export default Messege
    