import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      {name: "Devraj", age: 28},
      {name: "Jaggu", age: 29},
      {name: "Shoitaan", age: 30}
    ],
    otherState: "Sample state"
  });//always return 2 elements: 1st element always be our current state 2nd eleent will be the function where we can update the state 

  const switchNameHandler = () => {
    // console.log("This was clicked");
    // this.state.persons[0].name = "Gabbar Singh"
    setPersonState({
      persons: [
        {name: "Devraj Boddu", age: 28},
        {name: "Jaggu", age: 29},
        {name: "Shoitaan", age: 30}
      ]
    })
  }
    return (
      <div className="App">
        <h1> Hello, React World</h1>
        <button onClick= {switchNameHandler}>Switch</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}>My Hobbies: Playing Cricket </Person>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Playing PUBG </Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}>My Hobbies: Eating </Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement("h1", null, "Hello, React World!!"));
}

export default app;
