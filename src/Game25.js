import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Game25 = () => {

  function Square({ input, onClick }) {
    return (
      <button 
        className="squareStyle25"
        onClick={onClick}>
          {input}
      </button>
    );
  }
  function Board() {
      const [eachMove, setEachMove] = useState(Array(25).fill(null));
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
        eachMove: Array(25).fill(null)
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
      if (input === 'X') {
        nextPlayer = 'X'
      } else {
        nextPlayer = 'X'
      }
      return nextPlayer
    }

      return (
        <div className="vertical">
        <div className="containerStyle gameBoard">
          
        <div className="boardStyle25">
        <div className="pink">
             <h1>Welcome to 5x5 Tic-Tac-Toe!</h1>
        </div>
          <div className="instructionsStyle">Next player: {findNextPlayer(input)}</div>
          <div className="instructionsStyle">Winner: {winner} </div>
          
            <div className="board-row rowStyle">
              {drawSq(0)}
              {drawSq(1)}
              {drawSq(2)}
              {drawSq(3)}
              {drawSq(4)}
            </div>
            <div className="board-row rowStyle">
              {drawSq(5)}
              {drawSq(6)}
              {drawSq(7)}
              {drawSq(8)}
              {drawSq(9)}
            </div>
            <div className="board-row rowStyle">
              {drawSq(10)}
              {drawSq(11)}
              {drawSq(12)}
              {drawSq(13)}
              {drawSq(14)}
            </div>
            <div className="board-row rowStyle">
              {drawSq(15)}
              {drawSq(16)}
              {drawSq(17)}
              {drawSq(18)}
              {drawSq(19)}
            </div>     
            <div className="board-row rowStyle">
              {drawSq(20)}
              {drawSq(21)}
              {drawSq(22)}
              {drawSq(23)}
              {drawSq(24)}
            </div>  
            <div>
             <button className="flicker" onClick={() => handleReset()}><h2>R<span id="offset">E</span>SET</h2></button>
             <Link to="/">
                <button className="noflicker">
                  <span class="fast-flicker">HOME</span>
                </button>
            </Link>
            <Link to="/20by20">
                <button className="noflicker">
                  <span class="fast-flicker">5-IN-A-ROW</span>
                </button>
            </Link>
        </div>     
          </div>
        </div>
        </div>
      );
    }


  function Game25() {
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
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20]
    ]

    for (let [pos1, pos2, pos3, pos4, pos5] of winningCombos) {
      if (tiles[pos1] === tiles[pos2] && tiles[pos2] === tiles[pos3] && tiles[pos3] === tiles[pos4] && tiles[pos4] === tiles[pos5]) {
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
      <Game25 />,
    </div>
  );
}

export default Game25;