export const initialBoardFen: string =
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

export const emptyBoardFen: string = "8/8/8/8/8/8/8/8";

export const fenSymbolToPiece: Record<string, string> = {
  p: "bp",
  P: "wp",
  b: "bb",
  B: "wb",
  n: "bn",
  N: "wn",
  r: "br",
  R: "wr",
  q: "bq",
  Q: "wq",
  k: "bk",
  K: "wk",
};
