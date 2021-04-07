import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Game = () => {

  function Square({ input, onClick }) {
    return (
      <button 
        className="squareStyle"
        onClick={onClick}>
          {input}
      </button>
    );
  }
  function Board() {
      const [eachMove, setEachMove] = useState(Array(9).fill(null));
      const [winner, setWinner] = useState('None')
      const [input, setInput] = useState('')

    const drawSq = (n) => {
      return (
        <Square 
        // we are looking for that single element of the array
          input = {eachMove[n]}
          onClick={() => handleClick(n)}
        />
      )
    }

    const handleClick = n => {
      if (!eachMove[n]) {

        if (winner !== 'None') {
          console.log(`The winner is: ${winner}`)
          return
        }

        let myTiles = [...eachMove]

        if (input === 'X') {
          myTiles[n] = 'O'
        } else {
          myTiles[n] = 'X'
        }

        setInput(myTiles[n])
        setEachMove(myTiles)
      }
      else {
        return
      }
    }

    const handleReset = () => {
  
      let state = {
        eachMove: Array(9).fill(null),
      }
      let recetWinner = 'None'
      let input = 'O'

      setEachMove(state.eachMove)
      setWinner(recetWinner)
      setInput(input)
    }

    useEffect(()=> {
      let newWinner = findWinner(eachMove)

      if (newWinner === 'X') {
        setWinner('X')
      } else if (newWinner === 'O') {
        setWinner('O')
      } else if (newWinner === 'DRAW') {
        setWinner('DRAW')
      }
    }, [eachMove]);

    const findNextPlayer = (input) => {
      let nextPlayer
      if (input === 'O') {
        nextPlayer = 'X'
      } else {
        nextPlayer = 'O'
      }
      return nextPlayer
    }

      return (
        <div className="vertical">
        <div className="containerStyle gameBoard">
          
        <div className="boardStyle">
        <div className="padded">
             <h1>Welcome to Tic-Tac-Toe!</h1>
             <h5>Try out our MEDIUM and HARD levels! A traditional Japanese board game for 2 players that is similar to but more complex than tic-tac-toe is called Gomoku. During the game, players take turns placing X's and O's (or black and white pieces) on the board with the goal of creating an unbroken line of 5 pieces in any direction. A traditional Gomoku board has a 15x15 grid of lines, but is sometimes played on a Go board, which has a 19x19 grid.</h5>
        </div>
          <div className="instructionsStyle">Next player: {findNextPlayer(input)}</div>
          <div className="instructionsStyle">Winner: {winner} </div>
          
            <div className="board-row rowStyle">
              {drawSq(0)}
              {drawSq(1)}
              {drawSq(2)}
            </div>
            <div className="board-row rowStyle">
              {drawSq(3)}
              {drawSq(4)}
              {drawSq(5)}
            </div>
            <div className="board-row rowStyle">
              {drawSq(6)}
              {drawSq(7)}
              {drawSq(8)}
            </div>
            <div>
             <button className="flicker" onClick={() => handleReset()}><h2>R<span id="offset">E</span>SET</h2></button>
             <Link to="/5by5">
                <button className="noflicker">
                  <span class="fast-flicker">MEDIUM</span>
                </button>
            </Link>
            <Link to="/20by20">
                <button className="noflicker">
                  <span class="fast-flicker">HARD</span>
                </button>
            </Link>
        </div>
          </div>
       
        </div>

        
        </div>
      );
    }


  function Game() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
        </div>
      );
    }
  // ========================================
  
  function findWinner(tiles) {
    let winner
    let winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let [pos1, pos2, pos3] of winningCombos) {
      if (tiles[pos1] === tiles[pos2] && tiles[pos2] === tiles[pos3]) {
        if (tiles[pos1] === 'X') {
          winner = 'X'
        } else if (tiles[pos1] === 'O') {
          winner = 'O'
        } 
      }
    }
    if (winner !== 'X' && winner !== 'O' && !tiles.includes(null)) {
      winner = 'DRAW'
    }
    return winner 
  }

  return (
    <div>
      <Game />
    </div>
  );
}

export default Game;