import React, { useState, useRef, useEffect } from "react";
import Chevron from "../InfoBar/Chevron";
import {  Row, Col }from 'react-bootstrap'
import Projects from '../../pages/Projects/Projects';

import "./Accordion.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setWidth, setWidthState] = useState("auto");
  const [setRotate, setRotateState] = useState("accordion__icon");
  // const [trigger, setTrigger] = useState(true);
  const [mounted] = useState(true);

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setWidthState(
      setActive === "active" ? "400px" : `${content.current.scrollWidth}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  };

  // const logMousePosition = (e) => {
  //   console.log({
  //     x: e.clientX,
  //     y: e.clientY,
  //   });
  // };


    // setTimeout(
    //   () => this.setState(toggleAccordion),
    //   3000
    // )


  const Position = () => {
    useEffect(() => {
      window.addEventListener("mousemove", toggleAccordion);
      console.log("Created");
      return () => {
        console.log("Cleaned up");
        window.removeEventListener("mousemove", toggleAccordion);
      }
    }, [])
    return null;
  }


  return (
    <Row>

    <Col xs={6} md={6} lg={6}>
    <div className="accordion__section" ref={content} style={{ maxWidth: `${setWidth}` }}>
    <div className="container">
       <p className="resize">resize container</p>
       <div className="dots"><span></span><span></span><span></span><span></span><span></span><span></span></div>
       <div className="content">
       <div class="gradient-border"></div>

      <button  className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxWidth: `${setWidth}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>

    <div>
        {/* <button onClick={() => setTrigger(!trigger)}>Trigger Update</button>
        <button onClick={() => setMount(!mounted)}>Toggle Mount</button> */}
        {mounted ? <Position /> : null}
    </div>
    </div>
    </div>
    </div>
    
    <Projects></Projects>
    </Col>
    </Row>

  );
}

export default Accordion;
