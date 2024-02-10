const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, turns }) {

    // computed value that is dervied from state 
    // deriving our gameboard from turns
    let gameBoard = initialGameBoard;

    for(const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        // update row and col with the player symbol - this is a dervied State.
        gameBoard[row][col] = player; 
    }


    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // // handle which row and colum and symbol was selected
    // function handleSelect(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {

    //         // updated the state in a immuatable (unchanging over time or unable to be changed) way 
    //         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedGameBoard;
    //     });

    //     onSelectSquare();
    // }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                        {/* passing rowIndex and colIndex as arguements - making sure data arriving and stored in app.js */}
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>))}
    </ol>;
}