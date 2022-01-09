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
    return (
      <div>
        {this.state.peopleInSpace.map((person, i) => <p key={i}>{i}. {person.name}</p>)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }
}

export default App