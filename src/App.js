import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "dwf1", name: "Devraj", age: 28 },
      { id: "dfdsf2", name: "Jaggu", age: 29 },
      { id: "dfdf3", name: "Shoitaan", age: 30 },
    ],
    otherState: "Sample state",
    showPersons: true,
    button_name: "Hide Persons",
  }; //always return 2 elements: 1st element always be our current state 2nd eleent will be the function where we can update the state

  switchNameHandler = (index) => {
    console.log("This was clicked");
    const persons = [...this.state.persons];
    const person = persons[index];
    person.name = "Gabbar Singh";
    persons[index] = person;
    this.setState({ persons: persons });
    // this.state.persons[index].name = "Gabbar Singh";
  };
  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };
  changedNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };
  toggelPersons = () => {
    const doesShow = this.state.showPersons;
    const name = doesShow ? "Hide Persons" : "Show Persons";
    this.setState({ showPersons: !doesShow, button_name: name });
    // setPersonState({
    //   persons: [
    //     { name: "Devraj", age: 28 },
    //     { name: "Jaggu", age: 29 },
    //     { name: "Shoitaan", age: 30 },
    //   ],
    //   showPersons: !doesShow,
    //   button_name: name,
    // });
  };
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.changedNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1> Hello, React World</h1>
        <button onClick={this.toggelPersons}>{this.state.button_name}</button>
        {persons}
      </div>
    );
  }

  // return React.createElement('div', {className: 'App'}, React.createElement("h1", null, "Hello, React World!!"));
}

export default App;
