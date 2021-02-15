import React from "react";

function Header({ heading }) {
  return (
    <header className="container w-100 my-4 text-center">
      <h1>{heading}</h1>
    </header>
  );
}

export default Header;
