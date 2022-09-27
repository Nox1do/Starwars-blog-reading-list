import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { BsXCircle } from "react-icons/bs";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  console.log(store.favoritos);

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mx-4 h1">
          <img
            src="https://www.kindpng.com/picc/m/27-270569_transparent-star-wars-logo-png-star-wars-png.png"
            alt="Bootstrap"
            width={50}
            height={34}
          />
        </span>
      </Link>
      <div className="dropdown my-2">
        <button
          className="btn btn-outline-primary mx-5"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favoritos
        </button>
        <ul className=" btn btn-outline-primary dropdown-menu">
          {store.favoritos.map((element, i) => {
            return (
              <li key={i}>
                {element.name}
                <button
                  onClick={() => actions.removeFav(i)}
                  className="float-right"
                >
                  <BsXCircle />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div className="ml-auto">
        
          <button className="btn btn-primary mx-5">
           {store.favoritos.map((element,i))}
          
        </Link>
      </div> */}
    </nav>
  );
};
