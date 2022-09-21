import React from "react";
import "../../styles/home.css";
import { BsHeart } from 'react-icons/bs';


export const Home = () => (
	//card
	<div className="card mx-4" style={{ width: "18rem" }}>
  <img src="https://fakeimg.pl/400x200/" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
<div className="d-flex justify-content-between">
	<a href="#" class="btn btn-outline-primary">learn more!</a>
	<a href="#" class="btn btn-outline-warning "><BsHeart color="orange" /></a>
    
</div>
	
  </div>
</div>
);
