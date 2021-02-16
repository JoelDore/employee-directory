import React from "react";

function Sort({ handleSort }) {
  return (
    <div className="container w-100 mx-auto text-center py-1">
      <label htmlFor="sort">Sort by: &nbsp;</label>
      <select id="sort" defaultValue="firstName" className="rounded" onChange={handleSort}>
        <option value="firstName">First Name</option>
        <option value="lastName">Last Name</option>
        <option value="id">ID</option>
      </select>
    </div>
  );
}

export default Sort;
