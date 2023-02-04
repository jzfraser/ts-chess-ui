import { useState, useEffect, useRef } from "react";

import { fenSymbolToPiece } from "../constants";
import Tile from "./Tile";
import { PieceType, DragInfoType } from "../types/Chessboard"

export interface ChessboardProps {
  boardFen: string;
  setBoardFen: Function;
}

function swapColor(color: "light" | "dark") {
  if (color === "light") return "dark";
  else return "light";
}

export default function Chessboard(props: ChessboardProps) {
  const [pieces, setPieces] = useState<Array<PieceType | null>>([]);
  const [activePiece, setActivePiece] = useState<HTMLElement>();
  const [dragInfo, setDragInfo] = useState<DragInfoType>();
  const rowRef = useRef<HTMLDivElement>(null);
  // const dragInfo = useRef<DragInfoType>();

  useEffect(() => {
    let pieces: Array<PieceType | null> = [];
    let fenRanks = props.boardFen.split("/");
    for (let rank of fenRanks) {
      let piece: PieceType | null = null;
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
  }, [props.boardFen]);


  // const handleMouseDown = (e: React.MouseEvent) => {
  //   const element = e.target as HTMLElement;
  //   if (element.classList.contains("bg-contain")) {
  //     console.log(element);
  //     const x = e.clientX;
  //     const y = e.clientY;
  //     const offsetLeft = element.offsetLeft;
  //     const offsetTop = element.offsetTop;
  //     const { left, top } = element.getBoundingClientRect();
  //     element.style.position = "absolute";
  //     if (rowRef.current) {
  //       let { height } = rowRef.current.getBoundingClientRect();
  //       element.style.width = `${height}px`;
  //       element.style.height = `${height}px`;
  //     }

  //     dragInfo.current = {
  //       startLeft: left - offsetLeft,
  //       startTop: top - offsetTop,
  //       startX: x,
  //       startY: y,
  //     };
  //     console.log(dragInfo.current);
  //     setActivePiece(element);
  //   }
  // };

  // const handleMouseMove = (e: React.MouseEvent) => {
  //   const element = e.target as HTMLElement;
  //   if (
  //     element.classList.contains("bg-contain") &&
  //     dragInfo.current !== undefined
  //   ) {
  //     console.log(dragInfo.current);
  //     const startLeft = dragInfo.current.startLeft;
  //     const startTop = dragInfo.current.startTop;
  //     const startX = dragInfo.current.startX;
  //     const startY = dragInfo.current.startY;
  //     element.style.backgroundPositionX = `${startLeft + e.clientX - startX}`;
  //     element.style.backgroundPositionY = `${startTop + e.clientY - startY}`;
  //     // element.style.transform = `translate(${
  //     //   startLeft + e.clientX - startX
  //     // }px, ${startTop + e.clientY - startY}px)`;
  //   }
  // };

  // const handleMouseUp = (_e: React.MouseEvent) => {
  //   if (activePiece) activePiece.style.position = "relative";
  //   setActivePiece(null);
  //   dragInfo.current = undefined;
  // };

  const classNames = "grid grid-rows-8 border-4 border-black ";
  const size =
    "min-w-[308px] min-h-[308px] lg:w-[808px] lg:h-[808px] md:w-[608px] md:h-[608px] sm:w-[408px] sm:h-[408px]";

  const handleMouseDown = (e: React.MouseEvent) => {
    const element = e.target as HTMLElement;
    element.style.position = "absolute";
    const startX = e.clientX - 50;
    const startY = e.clientY - 50;
    element.style.left = `${startX}px`
    element.style.top = `${startY}px`
    element.className = element.className.replace('cursor-grab', 'cursor-grabbing')
    setActivePiece(element);
    setDragInfo({ startX, startY, top: 0, left: 0 })
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!activePiece || !dragInfo) return
    activePiece.style.transform =
      `translate(${e.clientX - 50 - dragInfo.startX}px, ${e.clientY - 50 - dragInfo.startY}px)`;
  };

  const handleMouseUp = (_e: React.MouseEvent) => {
    if (!activePiece) return;
    setActivePiece(undefined);
    setDragInfo(undefined);
    activePiece.style.position = "relative";
    activePiece.style.removeProperty("top");
    activePiece.style.removeProperty("left");
    activePiece.className = activePiece.className.replace('cursor-grabbing', 'cursor-grab')
    activePiece.style.transform = '';
  };

  const mouseEventHandlers = {
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  };

  const generateTiles = (pieces: Array<PieceType | null>) => {
    let color: "light" | "dark" = "dark";
    return pieces.map((p, i) => {
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
      color = swapColor(color)
      return newTile;
    });
  };

  const tiles = generateTiles(pieces);

  return (
    <div id="chessboard" className={`${size} ${classNames}`}>
      <div className="w-full grid grid-cols-8" ref={rowRef}>
        {tiles.slice(0, 8)}
      </div>
      <div className="w-full grid grid-cols-8">
        {tiles.slice(8, 16)}
      </div>
      <div className="w-full grid grid-cols-8">
        {tiles.slice(16, 24)}
      </div>
      <div className="w-full grid grid-cols-8">
        {tiles.slice(24, 32)}
      </div>
      <div className="w-full grid grid-cols-8">
        {tiles.slice(32, 40)}
      </div>
      <div className="w-full grid grid-cols-8">
        {tiles.slice(40, 48)}
      </div>
      <div className="w-full grid grid-cols-8">
        {tiles.slice(48, 56)}
      </div>
      <div className="w-full grid grid-cols-8">
        {tiles.slice(56, 64)}
      </div>
    </div>
  );
}
