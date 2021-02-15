import React from "react";

function Header({ heading }) {
  return (
    <header className="w-100 mb-4 text-center">
      <h1>{heading}</h1>
    </header>
  );
}

export default Header;
