import React from "react";

function Filter({ users }) {
  return (
    <div className="container w-100 mx-auto mb-3 text-center py-1">
      <label htmlFor="filter">Filter by name: &nbsp;</label>
      <input id="filter" list="options" placeholder="All Users" className="rounded pl-2" style={{ width: "fit-content" }} />
      <datalist id="options" defaultValue="All Users">
        <option value="All Users" />
        {users.map((user) => <option key={user.login.uuid} value={`${user.name.first} ${user.name.last}`} />)}
      </datalist>
    </div>
  );
}

export default Filter;
