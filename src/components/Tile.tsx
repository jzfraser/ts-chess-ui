import Piece from "./Piece";
import { PieceType } from "../types/Chessboard";

export interface TileProps {
  color: "light" | "dark";
  width: string;
  height: string;
  piece?: PieceType;
  mouseEventHandlers: {
    handleMouseDown: Function;
    handleMouseMove: Function;
    handleMouseUp: Function;
  };
}

export default function Tile(props: TileProps) {
  const color = props.color === "light" ? "bg-neutral-400" : "bg-neutral-700";

  return (
    <div className={`${color}`}>
      {props.piece && (
        <Piece
          symbol={props.piece}
          mouseEventHandlers={props.mouseEventHandlers}
        />
      )}
    </div>
  );
}
