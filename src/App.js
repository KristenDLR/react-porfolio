import logo from './logo.svg';
import { BrowserRouter as Router } from "react-router-dom";
import Container from "@material-ui/core/Container";
import './App.css';
import SearchAppBar from '../src/components/Nav/Nav';
import landingPage from '../src/pages/landingPage/landingPage';

function App() {
  return (
    <Router>
      <Container>
        <SearchAppBar></SearchAppBar>


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <landingPage></landingPage>
    </Container>
    </Router>

  );
}

export default App;
