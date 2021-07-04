import  React  from "react";
import './landingPage.css';
// import { useGlobalEvent } from "beautiful-react-hooks";
import InfoBar from "../../components/InfoBar/InfoBar";

function LandingPage(){
  return(
          <div className="container">



       <p className="resize">resize container</p>
       <div className="dots"><span></span><span></span><span></span><span></span><span></span><span></span></div>
       <div className="content">
       <div class="gradient-border">
       <InfoBar title= {["About Me"]}

         content = {[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          // <h1>Animating border-radius</h1>,
          // <h2>mix-blend-mode: luminosity</h2>,
          // <h3>Follow me</h3>, <a href="https://twitter.com/andrejsharapov" target="target">in Twitter</a>,
          // <h3>Part of the</h3>, <a href="https://codepen.io/collection/DPjNmW/" target="target">CSS Mix-blend-mode here</a>
        ]}/>

       </div>
       </div>

    </div>
        );
      }



 export default LandingPage;


// function LandingPage (){
//   const setDimensions = React.useState({
//     height: window.innerHeight,
//     width: window.innerWidth
//   })
// console.log(setDimensions);

//   React.useEffect(()=> {
//     function handleResize() {
// //       this.setState({
// //       setDimensions({
// //         heigh:50,
// //         width: 50
// //       })
// //     }
// //     }

// // window.addEventListener('resize', handleResize)

// // return _ => {
// //   window.removeEventListener('resize', handleResize)
// // }

//   //  * Calculate & Update state of new dimensions

//   function updateDimensions() {
//     if(window.innerWidth < 500) {
//       this.setState({ width: 40, height: 40 });
//     } else {
//       let update_width  = window.innerWidth-100;
//       let update_height = Math.round(update_width/4.4);
//       this.setState({ width: update_width, height: update_height });
//     }
//   }

//   /**
//    * Add event listener
//    */
//  function componentDidMount() {
//     // this.setState({
//     //   dimensions:{
//     //     width: this.container.offsetWidth,
//     //     height: this.container.offsetHeight,
//     //   },
//     // })
//     this.updateDimensions();
//     window.addEventListener("resize", this.updateDimensions.bind(this));
//   }

//   /**
//    * Remove event listener
//    */
//   function componentWillUnmount() {
//     return _ => {
//     window.removeEventListener("resize", this.updateDimensions.bind(this));
//     }
//   }
// }})

///HERE
// const { useState } = React;

// export default class LandingPage extends Component {

//   constructor() {
//     super();
//     this.state = {
//       // dimensions:{
//         width: this.offsetWidth,
//         height: this.offsetHeight

//   };

// const setDimensions = React.useState({
//   height: window.innerHeight,
//   width: window.innerWidth
// })
// console.log(setDimensions);
//   }


    // console.log(this);

    // if (window.performance) {
    //   if (performance.navigation.type === 1) {
    //     alert( "This page is reloaded " + this.state.width );
    //     this.updateDimensions()
    //   } else {
    //     alert( "This page is not reloaded");
    //   }
    // }


//   /**
//    * Calculate & Update state of new dimensions
//    */
  // updateDimensions() {
  //   if(window.innerWidth < 500) {
  //     this.setState({ width: 40, height: 40 });
  //   } else {
  //     let update_width  = window.innerWidth-100;
  //     let update_height = Math.round(update_width/4.4);
  //     this.setState({ width: update_width, height: update_height });
  //   }
  // }

//   /**
//    * Add event listener
//    */
  // componentDidMount() {
    // this.setState({
    //   dimensions:{
    //     width: this.container.offsetWidth,
    //     height: this.container.offsetHeight,
    //   },
    // })
  //   this.updateDimensions();
  //   window.addEventListener("resize", this.updateDimensions.bind(this));
  // }

//   /**
//    * Remove event listener
//    */
//   componentWillUnmount() {
//     window.removeEventListener("resize", this.updateDimensions.bind(this));
//   }


///HTML HERE
//   render() {
//     return(
//       <div className="container">

//   <InfoBar></InfoBar>

//    <p className="resize">resize container</p>
//    <div className="dots"><span></span><span></span><span></span><span></span><span></span><span></span></div>
//    <div className="content">
//    <div class="gradient-border">
//      <h1>Animating border-radius</h1><span>&</span>
//      <h2>mix-blend-mode: luminosity</h2>
//      <p></p>Follow me<a href="https://twitter.com/andrejsharapov" target="target">in Twitter</a>.
//      Part of the<a href="https://codepen.io/collection/DPjNmW/" target="target">CSS Mix-blend-mode here</a>.
//    </div>
//    </div>

// </div>
//     );
//   }
// }




// class LandingPage extends Component {

//     render() {
//       return (

// <div className="container">

//   <InfoBar></InfoBar>

//    <p className="resize">resize container</p>
//    <div className="dots"><span></span><span></span><span></span><span></span><span></span><span></span></div>
//    <div className="content">
//    <div class="gradient-border">
//      <h1>Animating border-radius</h1><span>&</span>
//      <h2>mix-blend-mode: luminosity</h2>
//      <p></p>Follow me<a href="https://twitter.com/andrejsharapov" target="target">in Twitter</a>.
//      Part of the<a href="https://codepen.io/collection/DPjNmW/" target="target">CSS Mix-blend-mode here</a>.
//    </div>
//    </div>

// </div>
//       );
//     };
//     // class ShowWindowDimensions extends React.Component {
//       state = { width: 0, height: 0 };
//       // render() {
//       //   return <span>Window size: {this.state.width} x {this.state.height}</span>;
//       // };
//     updateDimension =() => {
//       this.setState({ width: window.innerWidth, height: window.innerHeight});
//     };
//     componentDidMount() {
//       window.addEventListener('resize', this.updateDimension);
//     };
//     componentWillUnmount() {
//       window.removeEventListener('resize', this.updateDimension);
//     }

//   }
