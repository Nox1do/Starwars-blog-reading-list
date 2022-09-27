import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = (type) => {
  

  const params = useParams();
  const { store, actions } = useContext(Context);
  console.log(store.infoCharacters);
  useEffect(() => {
    if (params?.theid) {
      actions.verInfoPersonajes(params?.theid);
    }
  }, [params?.theid]);
  return (
    <div className="d-flex">
      <img
        src={
          "https://starwars-visualguide.com/assets/img/characters/" +
          params.theid +
          ".jpg"
        }
      />
	  character
      name: {store.infoCharacters.name} {params.theid} <br />
      name: {store.infoCharacters.name} {params.theid} <br />
      name: {store.infoCharacters.name} {params.theid} <br />
     
	  
    </div>
  );
};
