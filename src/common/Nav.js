import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/about">About Us </Link>
        </li>
        <li>
          <Link to="/shop">Shop Now </Link>
        </li>
      </ul>
    </div>
  );
}
