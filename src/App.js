import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ['', '', '', '', '', '', '', '', ''],
      xLocation: null,
      oLocation: null,
      clickCounter: 0,
    }
  }


  handleGamePlay = (index) => {
    const {squares, xLocation, oLocation, clickCounter} = this.state
  
    //let addClick = clickCounter
    
    console.log(addClick);
    for(index = 0; index<squares.length; index++){
      let addClick = clickCounter++
      if(addClick %2 === 0){
        return squares[index] = "🎃"
        this.setState({squares: squares, clickCounter: clickCounter})
      } else{
        squares[index] = "👻"
        this.setState({squares: squares, clickCounter: clickCounter})
      }

    }
   

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
