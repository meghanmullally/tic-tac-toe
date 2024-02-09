import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // handle which row and colum and symbol was selected
    function handleSelect(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {

            // updated the state in a immuatable way - 
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedGameBoard[rowIndex][colIndex] = 'X';
            return updatedGameBoard;
        });
    }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={() => handleSelect(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>))}
    </ol>;
}