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
        this.setState({ users: res.data.results })
      })
      .catch(err => console.log("getUsers Error: ", err))
  }

  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <User
            key={user.login.uuid}
            picture={user.picture}
            name={user.name}
            id={user.id}
            location={user.location}
            email={user.email}
            phone={user.phone}
          />
        ))}
      </div>
    );
  }
}

export default DirectoryContainer;
