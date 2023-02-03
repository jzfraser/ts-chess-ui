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

export type TileDefinition = {
  key: number;
  color: 'light' | 'dark';
  piece: PieceType | null;
  width: string;
  height: string;
};
