import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Skills } from './components/skills/skills';
import { Counter } from './components/counter/Counter';

type AppProp ={
  name?:string,
  age?:number
}

function App(props : AppProp) {
  const skills = ['html', 'JS', 'React']

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
          Learn React {props.name} {props.age}
          <Skills skills={skills}/>
          <Counter/>
      </header>
    </div>
  );
}

export default App;
