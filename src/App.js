import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostComponent from "./PostComponet";
import StateComponent from "./pages/StateComponent";
import ErrorBoundary from "./pages/ErrorBoundary";
import ChildrenComponent from "./pages/ChildrenComponent";
import TestVisible from "./pages/TestVisible";
import ReactHook from "./pages/ReactHookComponent";
import ReducerHook from "./pages/ReducerHook";

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
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
        <PostComponent/>
        <StateComponent/>
        <ErrorBoundary>
          hah
        </ErrorBoundary>
        <ChildrenComponent>
          {(value) => {
            return <h1>你很优秀{value}</h1>
          }}
        </ChildrenComponent>
        <TestVisible/>
        <ReactHook/>
        <ReducerHook/>
      </header>
    </div>
  );
}

export default App;
