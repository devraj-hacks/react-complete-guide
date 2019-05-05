import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Devraj", age: 28},
      {name: "Jaggu", age: 29},
      {name: "Shoitaan", age: 30}
    ],
    otherState: "Sample state"
  }

  switchNameHandler = () => {
    // console.log("This was clicked");
    // this.state.persons[0].name = "Gabbar Singh"
    this.setState({
      persons: [
        {name: "Devraj Boddu", age: 28},
        {name: "Jaggu", age: 29},
        {name: "Shoitaan", age: 30}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1> Hello, React World</h1>
        <button onClick= {this.switchNameHandler}>Switch</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Playing Cricket </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Playing PUBG </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies: Eating </Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement("h1", null, "Hello, React World!!"));
  }
}

export default App;
