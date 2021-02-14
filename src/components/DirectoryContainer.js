import React from "react";
import User from "./User";

function DirectoryContainer() {
  /*Get some amount of users from API*/

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

export default DirectoryContainer;
