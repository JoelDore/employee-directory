import React from "react";

function User({ picture, name, id, location, email, phone }) {
  return (
    <div className="User card w-100 my-3">
      <div className="row card-body justify-content-center align-items-center">
        <div className="col-auto">
          <img
            src={picture.medium}
            className="rounded-circle"
            alt={name.first + name.last}
          ></img>
        </div>
        <div className="col-auto">
          <h2>{name.first} {name.last}</h2>
          <h4>ID: {id.value}</h4>
        </div>
        <div className="col-auto border-left border-secondary">
          <address>
            {location.street}
            <br />
            {location.city}, {location.state} {location.postcode}
          </address>
          <strong>{email}</strong>
          <br />
          <strong>{phone}</strong>
        </div>
      </div>
    </div>
  );
}

export default User;
