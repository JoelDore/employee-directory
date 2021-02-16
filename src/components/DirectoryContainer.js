import React, { Component } from "react";
import User from "./User";
import Table from "./Table";
import API from "../utils/API";
import Header from "./Header";
import Sort from "./Sort";
import Filter from "./Filter";

function sortArrByValue(arr = [], value = "") {
  arr.sort((a, b) => {
    let sorter = 0;
    switch (value) {
      case "firstName":
        a.name.first < b.name.first ? --sorter : ++sorter
        break

      case "lastName":
        a.name.last < b.name.last ? --sorter : ++sorter
        break

      case "id":
        a.id.value < b.id.value ? --sorter : ++sorter
        break

      default: break;
    }
    return sorter
  })
  return arr
}

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
        const sortedUsers = sortArrByValue(res.data.results, "firstName")
        this.setState({ users: sortedUsers })
      })
      .catch(err => console.log("getUsers Error: ", err))
  }

  handleSort = (event) => {
    const sorted = sortArrByValue([...this.state.users], event.target.value)
    this.setState({ users: sorted })
  }

  handleFilterChange = (event) => {
    const value = event.target.value.toLowerCase();
    this.setState({ filter: value })
  }

  render() {
    return (
      <div className="container-fluid h-100 py-3 bg-info p-0">
        <Header heading="Employee Directory" />
        <Sort handleSort={this.handleSort} />
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
