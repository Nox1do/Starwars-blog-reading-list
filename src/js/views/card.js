import React from 'react';
import {Link} from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';


   export const Card = (props) => {
return (
	<div className="card mx-3" style={{ width: "18rem" }}>
  <img src="https://fakeimg.pl/400x200/" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">
    Genre: Male <br/>
	  Hair Color: blond <br/>
	  Eye Color: blue <br/>
    </p>
	<div className="d-flex justify-content-between pb-2 ">
    <Link to={() => props.type === 'players' ? `/Characters/${props.id}`: `/Planets/${props.id}` } className="btn btn-outline-primary">
      Learn More!
    </Link>
    <Link to='/Planets' className="btn btn-outline-warning">
      <BsHeart color="orange" />
    </Link>
	</div>
  </div>
</div>
)
};

export default Card