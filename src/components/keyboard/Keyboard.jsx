import { TopRow, MiddleRowOne, MiddleRowTwo, BottomRow } from "./import";
import "./style.scss";

const Keyboard = () => {
  return (
    <div className="Keyboard__">
      <TopRow />
      <MiddleRowOne />
      <MiddleRowTwo />
      <BottomRow />
    </div>
  );
};

export default Keyboard;
