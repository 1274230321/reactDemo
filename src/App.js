import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import SecCom from './SecCom';
import IntervalDate from './IntervalDate'
import ShellBar from './ShellBar'

function App() {
  return (
    <div className="App">
      Please check my component below
        <div>
            <ShellBar/>
        </div>
        <div>
            <HelloWorld/>
        </div>
        <div>
            <SecCom/>
        </div>
        <div>
            <IntervalDate/>
        </div>


      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn ReactDFD*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
