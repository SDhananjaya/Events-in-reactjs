import React, { Component } from 'react'
import Messege from './Messege'
import User from './User'
import Click from './Click'
import Value from './Value'
import Clickme from './Clickme'
import Effect from './Effect'
import Chang from './Chang'
import Only from './Only'
import Lolin from './Lolin'
import Filter from './Filter'
export default class App extends Component {
  state ={
    nam:"Dhana"
  }
  render() {
    return (
      <div>
       <h2>name:{this.state.nam}</h2>
        <hr/>
        <Messege/>
        <User/>
        <Click/>
        <Value/>
        <Clickme/>
        <Effect/>
        <Chang/>
        <Only/>
        <Lolin/>
        <Filter/>
       
      </div>
    )
  }
}
