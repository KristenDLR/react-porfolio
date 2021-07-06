import React from "react";
// import { Container, Row, Col }from 'react-bootstrap'
// import Wrapper from "@material-ui/core/Container";
import ReactCardFlip from 'react-card-flip';
import './Projects.css';





    class Projects extends React.Component {
      constructor() {
        super();
          this.state = {
          isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }

      render() {
        return (
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
            <div class= "card">
              This is the front of the card.
              <button onClick={this.handleClick}>Click to flip</button>
              </div>

           <div>
              This is the back of the card.
              <button onClick={this.handleClick}>Click to flip</button>
            </div>
          </ReactCardFlip>
        )
      }
    }

//     <Container >
//       <Row>
//         <Col id="portfolioHeader" dats-asos="zoom-in-up">Projects</Col>
//       </Row>
//     <Wrapper>
//       <div classNameName="card">
//       <input type="checkbox" id="card9" classNameName="more" />
//       </div>
//       <div
//             classNameName="front"
//             style="background-image: url('./assets/images/voteSticker.jpg')"
//           >
//             <div className="inner">
//               <h2>Promote The Vote</h2>

//               <label for="card9" classNameNameName="button" aria-hidden="true">
//                 Details
//               </label>
//             </div>
//           </div>
//           <div className="back">
//             <div className="inner">
//               <div className="info">

//                 <div className="icon">


//                 </div>
//               </div>
//               <div className="info">


//                 <div className="icon">


//                 </div>
//               </div>
//               <div className="info">

//                 <div className="icon">
//                   {/* <img
//                     src="https://img.icons8.com/color/48/000000/nodejs.png"
//                   /> */}

//                 </div>
//               </div>
//               <div className="info">

//                 <div className="icon">


//                 </div>
//               </div>
//               <div className="description">
//                 <p>
//                   This application was created to provide a platform for US
//                   citizens to communicate with others about why they vote and
//                   how they better prepare themselves.
//                 </p>
//                 <ul>
//                   <li>Uses a Node and Express Web Server.</li>
//                   <li>Is backed by a MongoDB Database.</li>
//                   <li>
//                     Has both GET and POST routes for retrieving and adding new
//                     data.
//                   </li>
//                   <li>Is deployed using Heroku (with Data).</li>
//                   <li>Uses Cheerio to scrape data.</li>
//                   <li>
//                     Does not expose sensitive API key information on the server,
//                     see Protecting-API-Keys-In-Node.md
//                   </li>
//                 </ul>
//               </div>
//               <div className="projectName">
//                 <a
//                   href="https://github.com/michjmend/Promote-The-Vote"
//                   target="blank" /></div>
// </div>
// </div>




//     </Wrapper>



//     </Container>


//   );


export default Projects;
