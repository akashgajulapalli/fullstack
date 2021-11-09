import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
      friends: [],
      token: "",
      status: true,
      baseUrl: "http://localhost:8000/api/users",
    };
  }
  componentDidMount() {
    let temptoken = localStorage.getItem("token");
    this.setState({
      token: temptoken,
    });
  }
  updateByMail = () => {
    if (this.state.token !== "") {
      this.setState({
        status: false,
      });
    }
  };
  getUsers = () => {
    let url = this.state.baseUrl;
    let headers = {
      token: this.state.token,
    };
    axios.get(url, { headers: headers }).then((response) => {
      let arr = response.data.userData;
      this.setState({
        friends: arr,
      });
    });
  };
  myDetails = () => {
    let url = this.state.baseUrl + "/me";
    let headers = {
      token: this.state.token,
    };
    axios.get(url, { headers: headers }).then((response) => {
      this.setState({
        userDetails: response.data.userDetails,
      });
    });
  };

  render() {
    const { status, friends, userDetails } = this.state;
    if (!status) {
      return <Redirect to="/update" />;
    }
    console.log(userDetails);

    return (
      <div>
        <button class="btn" onClick={this.myDetails}>
          Account Details
        </button>
        <br />
        <button class="btn" onClick={this.updateByMail}>
          Update User Id
        </button>
        <br />
        <button class="btn" onClick={this.getUsers}>
          My friends
        </button>
        {friends.length > 0
          ? friends.map((item) => {
              return <p>{item.name}</p>;
            })
          : null}
        <p>{userDetails.name}</p>
        <p>{userDetails.email}</p>
      </div>
    );
  }
}

export default Profile;
