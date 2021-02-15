import React from "react";

function Table(props) {
  return (
    <div className="container w-100 py-1 bg-secondary" style={{ maxWidth: "fit-content" }}>
      {props.children}
    </div>
  );
}

export default Table;
