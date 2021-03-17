import logo from './logo.svg';
import SearchAppBar from './components/Nav/Nav';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import './App.css';

function App() {
  return (
    <Router>
      <Container>
        <SearchAppBar></SearchAppBar>


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
    </Container>
    </Router>
  );
}

export default App;
