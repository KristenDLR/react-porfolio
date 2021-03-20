import React from "react";
import './landingPage.css';

class LandingPage extends React.Component {
    render() {
      return (

<div className="container">

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
    }
  }
/* <section>
  <h2>Mix-blend-mode: luminosity</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus soluta, quas dolore, non, officia ea sequi molestias assumenda libero ratione expedita hic consequatur eos ipsum et quasi id incidunt odit?</p>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum error id aspernatur magni rem provident nemo nulla corporis culpa laudantium. Ea temporibus non vitae voluptatem sunt, pariatur odio dolorem harum.</p>
  <p>
    <Lorem>ipsum dolor sit amet, consectetur adipisicing elit. Temporibus soluta, quas dolore, non, officia ea sequi molestias assumenda libero ratione expedita hic consequatur eos ipsum et quasi id incidunt odit?</Lorem>
  </p>
  <p>
    <Lorem>ipsum dolor, sit amet consectetur adipisicing elit. Harum error id aspernatur magni rem provident nemo nulla corporis culpa laudantium. Ea temporibus non vitae voluptatem sunt, pariatur odio dolorem harum.</Lorem>
  </p>
</section> */



export default LandingPage;
