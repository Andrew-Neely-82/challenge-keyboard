import { Key } from "./import";
import { Shift, Backspace } from "../../assets/export";

const MiddleRowTwo = () => {
  const keys = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="Keyboard__MiddleRowTwo">
      <Key className="shift-key">
        <img src={Shift} alt="shift-key" aria-label="Shift Key" />
      </Key>
      {keys.map((key, index) => {
        return <Key value={key} label={key} key={index} />;
      })}
      <Key className="backspace">
        <img src={Backspace} alt="Backspace-key" aria-label="Backspace Key" />
      </Key>
    </div>
  );
};

export default MiddleRowTwo;
