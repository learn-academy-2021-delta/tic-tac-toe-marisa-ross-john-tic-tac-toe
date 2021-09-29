import React, { Component } from "react"
import Square from "./components/Square"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      xLocation: null,
      oLocation: null,
      // clickCounter: 0,
    }
  }

  componentDidMount() {
    let treasure = Math.floor(Math.random() * this.state.squares.length)
    let bomb = Math.floor(Math.random() * this.state.squares.length)
    this.setState({ xLocation: treasure, oLocation: bomb })
  }

  handleGamePlay = (index) => {
    // destructuring
    const { squares, xLocation, oLocation } = this.state
    if (xLocation === index) {
      squares[index] = "👻"
    }
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
  }

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
