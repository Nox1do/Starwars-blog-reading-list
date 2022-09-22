import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <a class="navbar-brand mx-5" href="#">
            <img src="https://www.kindpng.com/picc/m/27-270569_transparent-star-wars-logo-png-star-wars-png.png" 
  alt="Bootstrap"
  width={50}
  height={35}
/>

          </a>
        </span>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary mx-5 px-4 py-2">
            Favorites
          </button>
        </Link>
      </div>
    </nav>
  );
};
