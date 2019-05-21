import React, { Component } from 'react'

export default class Todolist extends Component {

 state = {
      name: '',
      email: '',
      error:[]

    }
    change=(event)=> {
      this.setState({[event.target.name]:event.target.value})
    }

    click=()=>{
      let design = [];
      if(!this.state.name){
        design.push("name")
        this.setState({error:design})
      }
      if(!this.state.email){
        design.push("email")
        this.setState({error:design})
      }
    }

  render() {
    return (
      <React.Fragment>
        <label>Name :</label>
        <input type="text" name="name" onChange={this.change}/><br/>
        {this.state.error.length?this.state.error.map((val,key1)=>{
          if(val==="name"){
           return <p key={key1}>Plzz fill the name</p>
          }
        }):""}
        <label>Email:</label>
        <input type="email" name="email" onChange={this.change}/><br />
        {this.state.error.length?this.state.error.map((val,key1)=>{
          if(val==="email"){
           return <p key={key1}>Plzz fill the email</p>
          }
        }):""}
        <button type="submit" className="btn btn-success" onClick={this.click}>Submit</button>
   </React.Fragment>
    )
  }
}
