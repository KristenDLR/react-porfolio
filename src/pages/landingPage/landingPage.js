import * as React from "react";
import './landingPage.css';
// import { useGlobalEvent } from "beautiful-react-hooks";
import InfoBar from "../../components/InfoBar/InfoBar";

// const { useState } = React;

class LandingPage extends React.Component {

    render() {
      return (

<div className="container">

  <InfoBar></InfoBar>

   <p className="resize">resize container</p>
   <div className="dots"><span></span><span></span><span></span><span></span><span></span><span></span></div>
   <div className="content">
   <div class="gradient-border">
     <h1>Animating border-radius</h1><span>&</span>
     <h2>mix-blend-mode: luminosity</h2>
     <p></p>Follow me<a href="https://twitter.com/andrejsharapov" target="target">in Twitter</a>.
     Part of the<a href="https://codepen.io/collection/DPjNmW/" target="target">CSS Mix-blend-mode here</a>.
   </div>
   </div>

</div>
      );
    };
    // updateDimension =() => {
    //   this.setState({ width: window.innerWidth, height: window.innerHeight});
    // };
    // componentDidMount() {
    //   window.addEventListener('resize', this.updateDimension);
    // };
    // componentWillUnmount() {
    //   window.removeEventListener('resize', this.updateDimension);
    // }

  }



export default LandingPage;
