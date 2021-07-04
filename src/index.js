// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./components/Accordion/Accordion";

// import "./styles.css";

function App() {
 return (
   <div>
     <Accordion
       title="About Kristen"
       content="I am a Developer, and current TA for the Rutgers Bootcamp Full stack Program. My responsbilities entail organization of Teaching Materials, facilitating review of key curriculum concepts, assitance with debugging code, and demonstrate instructional skills. I've done work collaborating with talented people to create digital products demonstrating skills in both front and back end development. I have worked on producing high quality responsive websites and exceptional user experience focused on:

       I take great care to ensure all projects represent the most viable product by providing high quality, responsive, project tested on a wide range of devices. I consider well document and easily-maintained projects enhance website functionality for proper growth."
     />

   </div>
 );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
