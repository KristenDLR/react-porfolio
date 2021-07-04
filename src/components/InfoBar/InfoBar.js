import React, { useState } from 'react';
import "../InfoBar/InfoBar.css";
import Chevron from "./Chevron";

function InfoBar(props){
  const[setActive,setActiveState]= useState("");

  function toggleAccordion(){
    setActiveState(setActive === "" ? "active" : "");
  }


  return(
   <div className="accordion__section">
    <button className= {'accordion ${setActive}'} onClick={toggleAccordion}>
      <p className="accordion__title">{props.title}</p>
      <Chevron/>
    </button>
    <div className="accordion__content">
      <div
      className="accordion__text"></div>
    </div>


</div>
      );
    };



export default InfoBar;
