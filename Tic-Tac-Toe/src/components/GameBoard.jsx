
export default function GameBoard({ onSelectSquare, board }) {

    // const [gameBoard, setGameBaord] = useState(initialGameBoard);



    // function handleSelectSquare(rowIndex, colIndex,) {
    //     setGameBaord((prev) => {
    //         const updatedBoard = [...prev.map(innerArray => [...innerArray])]
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol
    //         return updatedBoard

    //     })

    //     onSelectSquare()
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}
                                    disabled={playerSymbol !== null}>
                                    {playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}

        </ol>
    )
}