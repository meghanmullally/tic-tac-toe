export default function GameBoard({ onSelectSquare, board }) {

    return <ol id="game-board">
        {board.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            {/* passing rowIndex and colIndex as arguements - making sure data arriving and stored in app.js */}
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)}
                                // disable button if symbol is x or o... if btn is null it will not be disabled
                                disabled={playerSymbol !== null}
                            >
                                {playerSymbol}
                            </button>
                        </li>
                    ))}
                </ol>
            </li>))}
    </ol>;
}