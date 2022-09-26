import React, { useEffect, useState, useSyncExternalStore } from "react";
import "../../styles/home.css";
import Card from "./card";






export const Home = () => {
//useState
const [players, setPlayers] = useState([]);
const [planets, setPlanets] = useState([]);

//fetch
const getCharacters = () => {
   fetch("https://www.swapi.tech/api/people/")
  .then((resp) => resp.json())
  .then((datos) => setPlayers(datos.results))
  .catch((err) => console.error(err));
};
console.log(players.name)

useEffect(()=> {
  getCharacters();

},[]);

return (
  <> 
  <h1 className="mx-3" style={{ color: "red" }}>Characters</h1>
  <div className=" row flex-row flex-nowrap overflow-scroll mx-2 py-2">    
  {players.map((item, index) => {
              return (
                <Card key={index} name={item.name} type="players" id={item.uid}/>
              );
            })}
		</div>
	
             
  
    <h1 className="mx-3" style={{ color: "red" }}>Planets</h1>
  <div className=" row flex-row flex-nowrap overflow-scroll mx-2">
  {players.map((item, i) => {
              return (
                <Card key={i} name={item.name} type="planets" id={item.uid}/>
              );
            })}
		</div>
   
  
    
    </>
);
};