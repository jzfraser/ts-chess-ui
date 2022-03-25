import { useState, useEffect } from "react";
import Tile from "./Tile";
import { fenSymbolToPiece } from "../constants";

export interface ChessboardProps {
  boardFen: string;
  setBoardFen: Function;
}

function swapColor(color: "light" | "dark") {
  if (color === "light") return "dark";
  else return "light";
}

export default function Chessboard(props: ChessboardProps) {
  const [pieces, setPieces] = useState<any[]>([]);
  const [activePiece, setActivePiece] = useState<HTMLElement | null>(null);
  const [tiles, setTiles] = useState<any[]>([]);

  const classNames = "grid grid-rows-8 border-4 border-black ";
  const size =
    "min-w-[308px] min-h-[308px] lg:w-[808px] lg:h-[808px] md:w-[608px] md:h-[608px] sm:w-[408px] sm:h-[408px]";

  const handleMouseDown = (e: React.MouseEvent) => {
    const element = e.target as HTMLElement;
    setActivePiece(element);
    console.log(element);
  };

  const handleMouseMove = (e: React.MouseEvent) => {};

  const handleMouseUp = (e: React.MouseEvent) => {
    setActivePiece(null);
  };

  const mouseEventHandlers = {
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  };

  function piecesFromFen() {
    let pieces: any[] = [];
    let fenRanks = props.boardFen.split("/");
    for (let rank of fenRanks) {
      let piece: string | null = null;
      for (let fenSymbol of rank) {
        piece = fenSymbolToPiece[fenSymbol] ?? null;
        if (piece === null) {
          for (let i = 0; i < parseInt(fenSymbol); i++) {
            pieces.push(null);
          }
        } else {
          pieces.push(piece);
        }
      }
    }
    setPieces(pieces);
  }

  useEffect(() => {
    piecesFromFen();
    // eslint-disable-next-line
  }, [props.boardFen]);

  useEffect(() => {
    let color: "light" | "dark" = "dark";
    const newTiles = pieces.map((p, i) => {
      if (i % 8 === 0) color = swapColor(color);
      const newTile = (
        <Tile
          key={i}
          color={color}
          piece={p}
          width="100px"
          height="100px"
          mouseEventHandlers={mouseEventHandlers}
        />
      );
      color = swapColor(color);
      return newTile;
    });
    setTiles(newTiles);
    // eslint-disable-next-line
  }, [pieces]);

  return (
    <div id="chessboard" className={`${size} ${classNames}`}>
      <div className="w-full grid grid-cols-8">{tiles.slice(0, 8)}</div>
      <div className="w-full grid grid-cols-8">{tiles.slice(8, 16)}</div>
      <div className="w-full grid grid-cols-8">{tiles.slice(16, 24)}</div>
      <div className="w-full grid grid-cols-8">{tiles.slice(24, 32)}</div>
      <div className="w-full grid grid-cols-8">{tiles.slice(32, 40)}</div>
      <div className="w-full grid grid-cols-8">{tiles.slice(40, 48)}</div>
      <div className="w-full grid grid-cols-8">{tiles.slice(48, 56)}</div>
      <div className="w-full grid grid-cols-8">{tiles.slice(56, 64)}</div>
    </div>
  );
}
