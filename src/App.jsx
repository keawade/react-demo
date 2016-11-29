import React, { Component } from 'react'
import './styles.scss'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const thing = "Hey!"
    return (
      <div>thing {thing}</div>
    )
  }
}

export default App
