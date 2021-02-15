import React, { Component } from "react";
import User from "./User";
import API from "../utils/API";

class DirectoryContainer extends Component {
  state = {
    users: []
  }

  /*Get some amount of users from API*/
  componentDidMount() {
    this.getUsers(20)
  }

  getUsers = number => {
    API.getUsers(number)
      .then((res) => {
        const users = res.data.results;
        this.setState({ users: users })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <User
        picture={{ medium: "" }}
        name={{ first: "", last: "" }}
        id={{ value: "" }}
        location={{ street: "", city: "", state: "", postcode: "" }}
        email=""
        phone=""
      />
    );
  }
}

export default DirectoryContainer;
