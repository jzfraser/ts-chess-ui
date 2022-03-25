import { useState } from "react";
import Chessboard from "./components/Chessboard";
import { initialBoardFen, emptyBoardFen } from "./constants";

function App() {
  const [boardFen, setBoardFen] = useState<string>(initialBoardFen);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-800">
      <button
        className="bg-white rounded-lg mr-4 p-2"
        onClick={() => setBoardFen(emptyBoardFen)}
      >
        Empty
      </button>
      <button
        className="bg-white rounded-lg mr-4 p-2"
        onClick={() => setBoardFen(initialBoardFen)}
      >
        Initialize
      </button>
      <Chessboard boardFen={boardFen} setBoardFen={setBoardFen} />
    </div>
  );
}

export default App;
