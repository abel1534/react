import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting'
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        <CounterThree />
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
  );
}

export default App;
