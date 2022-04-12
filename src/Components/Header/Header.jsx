import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="p-4 w-full flex justify-center sticky bg-white top-0">
      <Link className="md:mx-8 mx-3 link" to="/home">
        HOME
      </Link>
      <Link className="md:mx-8 mx-3 link" to="/reviews">
        REVIEWS
      </Link>
      <Link className="md:mx-8 mx-3 link" to="/dashboard">
        DASHBOARD
      </Link>
      <Link className="md:mx-8 mx-3 link" to="/blogs">
        BLOGS
      </Link>
    </nav>
  );
};

export default Header;
