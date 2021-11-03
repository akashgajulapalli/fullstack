import axios from "axios";
import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  getEvent = (e) => {
    if (e.target.name === "mailid") {
      this.setState({
        email: e.target.value,
      });
    } else if (e.target.name === "pwd") {
      this.setState({
        password: e.target.value,
      });
    }
  };
  doLogin = () => {
    let newObj = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("http://localhost:8000/api/auth/login", newObj)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response?.data?.token);
        }
      });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div className="imgcontainer">
          <img src="img_avatar2.png" alt="Avatar" className="avatar" />
        </div>
        <div className="container">
          <label for="mailid">
            <b>E-mail</b>
          </label>
          <input
            type="text"
            defaultValue={email}
            placeholder="Enter Email"
            name="mailid"
            id="mailid"
            onChange={this.getEvent}
            required
          />
          <label for="pwd">
            <b>Password</b>
          </label>
          <input
            type="password"
            defaultValue={password}
            placeholder="Enter Password"
            name="pwd"
            onChange={this.getEvent}
            required
          />
          <button type="submit" onClick={this.doLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
