import { Key } from "./import";

const MiddleRowOne = () => {
  const keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];

  return (
    <div className="Keyboard__MiddleRowOne">
      {keys.map((key, index) => {
        return <Key value={key} label={key} key={index} />;
      })}
    </div>
  );
};
export default MiddleRowOne;
