import Piece from "./Piece";
import { PieceType } from "../types/Chessboard";

export interface TileProps {
  color: "light" | "dark";
  width: string;
  height: string;
  piece?: PieceType;
}

export default function Tile(props: TileProps) {
  const color = props.color === "light" ? "bg-neutral-400" : "bg-neutral-700";

  return (
    <div className={`${color} w-${props.width} h-${props.height}`}>
      {props.piece && <Piece symbol={props.piece} />}
    </div>
  );
}
