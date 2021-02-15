import React from "react";

function Sort() {
  return (
    <div className="container w-100 mx-auto text-center py-1">
      <label htmlFor="sort">Sort by: &nbsp;</label>
      <select id="sort" defaultValue="Name" className="rounded">
        <option value="Name">Name</option>
        <option value="ID">ID</option>
      </select>
    </div>
  );
}

export default Sort;
