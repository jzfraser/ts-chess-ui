import { PieceType } from "../types/Chessboard";

export interface PieceProps {
  symbol: PieceType;
}

export default function Piece(props: PieceProps) {
  let classNames = "w-full h-full bg-contain bg-no-repeat ";
  const pieceColor = props.symbol[0];
  const pieceType = props.symbol[1];

  if (pieceColor === "w") {
    if (pieceType === "p") classNames += "bg-wp";
    else if (pieceType === "b") classNames += "bg-wb";
    else if (pieceType === "n") classNames += "bg-wn";
    else if (pieceType === "r") classNames += "bg-wr";
    else if (pieceType === "q") classNames += "bg-wq";
    else if (pieceType === "k") classNames += "bg-wk";
  } else {
    if (pieceType === "p") classNames += "bg-bp";
    else if (pieceType === "b") classNames += "bg-bb";
    else if (pieceType === "n") classNames += "bg-bn";
    else if (pieceType === "r") classNames += "bg-br";
    else if (pieceType === "q") classNames += "bg-bq";
    else if (pieceType === "k") classNames += "bg-bk";
  }

  return <div className={classNames}></div>;
}
