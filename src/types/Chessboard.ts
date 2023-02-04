export type PieceType =
  | "wp"
  | "bp"
  | "wb"
  | "bb"
  | "wn"
  | "bn"
  | "wr"
  | "br"
  | "wq"
  | "bq"
  | "wk"
  | "bk";

export type DragInfoType = {
  left: number;
  top: number;
  startX: number;
  startY: number;
}
