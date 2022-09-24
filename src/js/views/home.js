import React from "react";
import "../../styles/home.css";
import Card from "./card";
import Characters from "./Characters";

export const Home = () => (
  <>
   <h1 className="mx-3" style={{ color: "red" }}>Characters</h1>
  <div className=" row flex-row flex-nowrap overflow-scroll mx-2 py-2">    
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>

    <h1 className="mx-3" style={{ color: "red" }}>Planets</h1>
  <div className=" row flex-row flex-nowrap overflow-scroll mx-2">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
    
    </>
);




