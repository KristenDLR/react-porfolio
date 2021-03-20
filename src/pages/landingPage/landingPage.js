import React from "react";
import './landingPage.css';

class landingPage extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }
//   render(){
//   return (

// <div className="container">
//  <p>why isnt this working</p>
//    <p className="resize">resize container</p>
//    <div className="dots"><span></span><span></span><span></span><span></span><span></span><span></span></div>
//    <div className="content">
//      <h1>Animating border-radius</h1><span>&</span>
//      <h2>mix-blend-mode: luminosity</h2>
//      <p></p>Follow me<a href="https://twitter.com/andrejsharapov" target="target">in Twitter</a>.
//      Part of the<a href="https://codepen.io/collection/DPjNmW/" target="target">CSS Mix-blend-mode here</a>.
//    </div>
//  </div>
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



export default landingPage;
