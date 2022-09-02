import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>The Intro to React</h1> 
        <p>
          React is so cool!
        </p>
        <p>
          In react we are able to easily create a user interface and see
          updates live after saving under VS code.  
        </p>
        <ul>
          More Contents
          React Explained 
          Author
        </ul> 
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
  );
}

export default App;
