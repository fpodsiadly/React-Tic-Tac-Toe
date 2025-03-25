const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

export default function GameBoard({ onSelectSquare, turns, onReset }) {
  // reset the game board
  let gameBoard = initialGameBoard.map((row) => [...row])

  for (const turn of turns) {
    const { square, player } = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }

  //   const [gameBoard, setGameBoard] = useState(initialGameBoard)
  //   function handleSelectSquare(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ]
  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol
  //       return updatedBoard
  //     })
  //     onSelectSquare()
  //   }

  return (
    <div>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                    disabled={playerSymbol !== null}
                  >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}
