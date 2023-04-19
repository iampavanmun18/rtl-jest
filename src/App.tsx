import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Skills } from './components/skills/skills';
import { Counter } from './components/counter/Counter';
import { Todo } from './components/todo/todo';

type AppProp ={
  name?:string,
  age?:number
}

function App(props : AppProp) {
  const skills = ['html', 'JS', 'React']

  console.log("skills",skills);


  const todos = [
    {id:1, title:'wash dishes', completed:true},
    {id:2, title:'make bed', completed:true},
    {id:3, title:'office work', completed:false},
  ]
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
     <div>
      {todos.map((todo)=>{
        return <Todo key={todo.id} todo={todo}/>
      })}
     </div>
    </div>
  );
}

export default App;
