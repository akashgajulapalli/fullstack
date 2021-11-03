import React, { Component } from "react";
import './register.css';
import axios from 'axios';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:"",
        mailid:"",
        pass:"",
        message:""
    };
  }
  addEvent = (e) => {
    if(e.target.name === "newName"){
      this.setState({
        username: e.target.value
      })
    }
    else if(e.target.name === "newEmail"){
      this.setState({
        mailid: e.target.value
      })
    }
    else if(e.target.name === "pwd"){
      this.setState({
        pass: e.target.value
      })
    }
  }
  createUser = () => {
    let url ="http://localhost:8000/api/users" 
    const newObj = {
      name: this.state.username,
      email: this.state.mailid,
      password: this.state.pass
    }
    axios.post(url , newObj).then((response) => {
      this.setState({
        message: response.data.message
      })
    })
    .catch((error) => {
      console.log(error);

    })     
  }
  render() {
      const {username,mailid,pass,message} = this.state;
      
    return (
      <div>
        <div class="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="newName">
            <b>Name</b>
          </label>
          <input
            type="text"
            defaultValue = {username}
            placeholder="Enter Name"
            name="newName"
            id="newName"
            onChange={this.addEvent}
            required
          />

          <label htmlFor="newEmail">
            <b>Email</b>
          </label>
          <input
            type="text"
            defaultValue={mailid}
            placeholder="Enter Email"
            name="newEmail"
            id="newEmail"
            onChange={this.addEvent}
            required
          />

          <label htmlFor="pwd">
            <b>Password</b>
          </label>
          <input
            type="password"
            defaultValue={pass}
            placeholder="Enter Password"
            name="pwd"
            id="pwd"
            onChange={this.addEvent}
            required
          />
          <hr />

          <button type="submit" class="registerbtn" onClick={this.createUser}>
            Register
          </button>
          <p>{message}</p>
        </div>

        <div class="container signin">
          <p>
            Already have an account? <a href="#">Sign in</a>.
          </p>
        </div>
      </div>
    );
  }
}

export default Register;
