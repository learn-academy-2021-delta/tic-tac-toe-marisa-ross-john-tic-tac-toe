import React, { Component } from "react"
import Square from "./components/Square"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      // xClick: [1,3,5,7,9],
      // oClick: [2,4,6,8],
      possibleClicks: [1,2,3,4,5,6,7,8,9],
      clickCounter: []
      // click1: 1,
      // click2: 2, 
      // click3: 3, 
      // click4: 4, 
      // click5: 5, 
      // click6: 6, 
      // click7: 7, 
      // click8: 8, 
      // click9: 9, 
      // clickCounter: 0,
    }
  }

//  componentDidMount() {
//    const clickCounter = 0
// }

  handleGamePlay = (index) => {
    const squares = this.state.squares 

    // destructuring
  
    
    // const { squares, xLocation, oLocation, } = this.state
    
    //clickCounter += 1
    
    // squares[0] = "👻"
    // squares[1] = "🎃"
    // this.setState({squares: squares})
    
  // xO = () => {
  //   if (clickCounter % 2 === 0) {
  //     squares[index] = "🎃"
  //   } else {
  //     squares[index] = "👻"
  //   }
  //   this.setState({square: squares})
  // }


    // let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // const oddEven = (array) => {
    //   return array.map((value) => {
    //     if (value % 2 === 0) {
    //       this.setState({ squares: squares })
    //     }
    //   })
    }

    // handleGamePlay = (index) => {
    //   // destructuring
    //   const { board, treasureLocation, bombLocation } = this.state
    //   if (treasureLocation === index) {
    //     board[index] = "💎"
    //     this.setState({ board: board })
    //   } else if (bombLocation === index) {
    //     board[index] = "💣"
    //   } else {
    //     // index is the parameter
    //     board[index] = "🌴"
    //     this.setState({ board: board })
    //   }
    // }

    //let addClick = clickCounter

    /// console.log(addClick)
    // for (index = 0; index < squares.length; index++) {
    //   let addClick = clickCounter++
    //   if (addClick % 2 === 0) {
    //     return (squares[index] = "🎃")
    //     this.setState({ squares: squares, clickCounter: clickCounter })
    //   } else {
    //     squares[index] = "👻"
    //     this.setState({ squares: squares, clickCounter: clickCounter })
    //   }
    // }
  //}

  render() {
    return (
      <>
        <h1>Tic Tac Toe</h1>

        <div className="gameboard">
          {this.state.squares.map((value, index) => {
            return (
              <Square
                value={value}
                index={index}
                key={index}
                handleGamePlay={this.handleGamePlay}
              />
            )
          })}
        </div>
      </>
    )
  }
}
export default App
