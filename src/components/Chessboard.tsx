import Tile from "./Tile";

export interface ChessboardProps {
  size: "lg" | "md" | "sm";
}

export default function Chessboard(props: ChessboardProps) {
  const classNames = "grid grid-rows-8 border-2 border-stone-400";
  const size =
    props.size === "lg" ? "w-[800px] h-[800px]" : "w-[600px] h-[600px]";
  function LightRow() {
    return (
      <div className="w-full grid grid-cols-8">
        <Tile color="light" width="100px" height="100px" piece="wp" />
        <Tile color="dark" width="100px" height="100px" />
        <Tile color="light" width="100px" height="100px" />
        <Tile color="dark" width="100px" height="100px" />
        <Tile color="light" width="100px" height="100px" />
        <Tile color="dark" width="100px" height="100px" />
        <Tile color="light" width="100px" height="100px" />
        <Tile color="dark" width="100px" height="100px" />
      </div>
    );
  }

  function DarkRow() {
    return (
      <div className="w-full grid grid-cols-8">
        <Tile color="dark" width="100px" height="100px" />
        <Tile color="light" width="100px" height="100px" />
        <Tile color="dark" width="100px" height="100px" />
        <Tile color="light" width="100px" height="100px" />
        <Tile color="dark" width="100px" height="100px" />
        <Tile color="light" width="100px" height="100px" />
        <Tile color="dark" width="100px" height="100px" />
        <Tile color="light" width="100px" height="100px" />
      </div>
    );
  }

  return (
    <div id="chessboard" className={`${size} ${classNames}`}>
      {LightRow()}
      {DarkRow()}
      {LightRow()}
      {DarkRow()}
      {LightRow()}
      {DarkRow()}
      {LightRow()}
      {DarkRow()}
    </div>
  );
}
