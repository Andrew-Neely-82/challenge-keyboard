import { Key } from "./import";

const TopRow = () => {
  const keys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];

  return (
    <div className="Keyboard__TopRow">
      {keys.map((key, index) => {
        return <Key value={key} label={key} key={index} />;
      })}
    </div>
  );
};
export default TopRow;
