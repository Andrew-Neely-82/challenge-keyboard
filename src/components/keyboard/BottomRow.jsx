import { Globe, Mic } from "../../assets/export";
import { Key } from "./import";

const BottomRow = () => {
  const keys = ["123", <img className="globe" src={Globe} alt="globe" />, <img className="mic" src={Mic} alt="Mic" />, "space", "Search"];

  return (
    <div className="Keyboard__BottomRow">
      {keys.map((key, index) => {
        return (
          <>
            <Key value={key} className={key} key={index} label={key} />
          </>
        );
      })}
    </div>
  );
};
export default BottomRow;
