// create your App component here
import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super(); //instantiate App class as Component from react so we can use "state"
        this.state = {
            peopleInSpace: []
          }
    }



  render() {
      //react expects key for unique identifier for each child, so use array index for now
    return (
      <div>
        {this.state.peopleInSpace.map((person, index) => <p key={index}>{index}. {person.name}</p>)}
      </div>
    )
  }

  //after component mounts and is rendered, fetch data, and finally component updates
  //fetch only happens once, after the first initial render.

  //1. Component renders and is mounted
  //2. Fetch (only on first render)
  //3. Update component after fetch.
  //4. component is in update phase (componentDidUpdate() etc.), and fetch is stopped
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json') //other keys:values - message: success, number: 10 (people)
      .then(response => response.json()) //translate to json
      .then(data => { //use data and set state based on data response
        this.setState({
          peopleInSpace: data.people
        })
      })
  }
}

export default App