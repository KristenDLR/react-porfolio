
//STAY
import React, { useState, useRef } from 'react';
import "../InfoBar/InfoBar.css";
import Chevron from "./Chevron";

function InfoBar(props){
  const[setActive,setActiveState]= useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  function toggleAccordion(){
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "" ? "0px" : '${content.current.scrollHeight)px');
    // console.log(content.current.scrollHeight);
  };


  return(
   <div className="accordion__section">
    <button className= {{accordion: '${setActive}'}} onClick={toggleAccordion}>
      <p className="accordion__title">{props.title}</p>
      <Chevron/>
    </button>
    <div ref={props.content} style={{maxHeight: '${setHeight}'}} className="accordion__content">
      <div
      className="accordion__text">
    </div>
    </div>
</div>
      );
    }



export default InfoBar;
