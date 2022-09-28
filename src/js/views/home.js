import React, { useEffect, useContext, useState} from "react";
import "../../styles/home.css";
import Card from "./card";
import { Context } from "../store/appContext";






export const Home = () => {
//useState

const { store, actions } = useContext(Context);

//fetch

// //personajes
// const getPlayers = () => {
   
// };

//   //planetas
// const getPlanets = () => {
  
// };





useEffect(()=> {
 

},[]);

return (
  <> 
  <h1 className="mx-3" >Characters</h1>
  <div className=" row flex-row flex-nowrap overflow-scroll mx-2 py-2">    
  {store.characters.map((item, index) => {
              return (
                <Card key={index} name={item.name} type='players' id={item.uid}/>
              );
            })}
		</div>
	
             
  
    <h1 className="mx-3">Planets</h1>
  <div className=" row flex-row flex-nowrap overflow-scroll mx-2">
  {store.planets.map((item, i) => {
              return (
                <Card key={i} name={item.name} type='planets' id={item.uid}/>
              );
            })}
		</div>
   
  
    
    </>
);
};