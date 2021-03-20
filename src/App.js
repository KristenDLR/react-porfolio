
import { BrowserRouter as Router } from "react-router-dom";
import Container from "@material-ui/core/Container";
import './App.css';
import SearchAppBar from '../src/components/Nav/Nav';
import LandingPage from '../src/pages/landingPage/landingPage';

function App() {
  return (
    <Router>
      <Container>
        <SearchAppBar></SearchAppBar>


    <div className="App">
      <header className="App-header">



      </header>
    </div>
    <LandingPage></LandingPage>
    </Container>
    </Router>

  );
}

export default App;
