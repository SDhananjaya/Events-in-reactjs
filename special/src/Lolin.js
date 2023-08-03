import React, { Component } from 'react'

export default class Lolin extends Component {
    state ={
        email:"",
        password:""
    }
    emailhandler=(event)=>{
        this.setState({email:event.target.value});
    }
    passwordhandler=(event)=>{
        this.setState({password:event.target.value});
    }
    onSubmithandler=(event)=>{
        event.preventDefault();
        console.log(this.state);
    }

  render() {
    return (
      <div>
        <center>
        <pre>{JSON.stringify(this.state)}</pre>
        <h2>LOgin page</h2>
        <form>
            <lable>Email Id ::</lable>
            <input type='email' onChange={this.emailhandler}/>  <br/>
            <lable>Possword :</lable>
            <input type='password' onChange={this.passwordhandler}/> <br/><br/>
            <input type='submit' onClick={this.onSubmithandler} />
        </form>
        </center>
      </div>
    )
  }
}
