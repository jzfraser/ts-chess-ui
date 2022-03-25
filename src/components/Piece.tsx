import { PieceType } from "../types/Chessboard";

export interface PieceProps {
  symbol: PieceType;
}

export default function Piece(props: PieceProps) {
  const classNames = "w-full h-full bg-contain bg-no-repeat";

  return <div className={`bg-${props.symbol} ${classNames}`}></div>;
}
