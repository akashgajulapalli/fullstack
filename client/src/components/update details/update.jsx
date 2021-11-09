import axios from "axios";
import React, { Component } from "react";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      userId: "",
      token: "",
      mailId: "",
    };
  }
  componentDidMount() {
    let tempToken = localStorage.getItem("token");
    let tempmail = localStorage.getItem("mailId");
    this.setState({
      token: tempToken,
      mailId: tempmail,
    });
  }
  readEvent = (e) => {
    this.setState({
      userId: e.target.value,
    });
  };
  changeUserId = () => {
    let obj = {
      name: this.state.userId,
      email: this.state.mailId,
    };
    let headers = {
      token: this.state.token,
    };
    let url = "http://localhost:8000/api/users";
    axios.put(url, obj, { headers: headers }).then((response) => {
        // console.log(response.data);
        this.setState({
            result: response.data
        })
    });
  };

  render() {
    const { userId , result } = this.state;

    return (
      <div>
        <input
          type="text"
          name="newUserID"
          defaultValue={userId}
          onChange={this.readEvent}
        />
        <button onClick={this.changeUserId}>Update</button>
        {
            <div>
            <p>{result.message}</p>
            </div>
        }
      </div>
    );
  }
}

export default Update;
