import React, { Component } from "react";
import User from "./User";
import Table from "./Table";
import API from "../utils/API";
import Header from "./Header";
import Sort from "./Sort";
import Filter from "./Filter";

class DirectoryContainer extends Component {

  state = {
    users: [],
    filter: ""
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

  handleSort = (event) => {
    /** TODO:
     * Add onClick to <Sort>
     * Get event.target data from select
     * const sorted => sort allUsers arrays
     * setState {users: sorted}
     */
  }

  handleFilterChange = (event) => {
    const value = event.target.value.toLowerCase();
    this.setState({ filter: value })
  }

  render() {
    return (
      <div className="container-fluid h-100 py-3 bg-info p-0">
        <Header heading="Employee Directory" />
        <Sort />
        <Filter key={1} users={this.state.users} handleFilterChange={this.handleFilterChange} />
        <Table>
          {this.state.users
            .filter(user => {
              return `${user.name.first} ${user.name.last}`
                .toLowerCase()
                .includes(this.state.filter)
            })
            .map((user) => (
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
        </Table>
      </div>
    );
  }
}

export default DirectoryContainer;
