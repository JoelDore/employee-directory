import React from "react";

function User({ picture, name, id, location, email, phone }) {
  return (
    <div className="User card w-100 my-3">
      <div className="row card-body py-2 justify-content-center justify-content-sm-between align-items-center">
        <div className="col-4 col-sm-auto">
          <img
            src={picture.large}
            width={100}
            className="rounded-circle"
            alt={`${name.first} ${name.last}: ${picture.large}`}
          />
        </div>
        <div className="col-8 col-sm-auto mr-sm-auto">
          <h3>{name.first} {name.last}</h3>
          <h5 class="text-muted">ID: {id.value}</h5>
        </div>
        <div className="col-11 col-sm-auto my-3 my-sm-0 mr-sm-auto border-left border-secondary">
          <address>
            {location.street.number} {location.street.name}
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
