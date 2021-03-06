import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      xLocation: null,
      oLocation: null
    }
  }

  //



  handleGamePlay = (index) => {
    const {squares, xLocation, oLocation} = this.state
    squares[index] = "👻"
    this.setState({squares: squares})

  }

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        
        <div className = "gameboard">
          {this.state.squares.map((value, index) => {
            return (
              <Square 
              value = {value} 
              index = {index} 
              key = {index}
              handleGamePlay = {this.handleGamePlay} />
            )
          }
          )}
          </div>

      </>
    )
  }
}
export default App
