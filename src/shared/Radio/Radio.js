import "./Radio.css";
import { Icon } from "../Icon/Icon";

export const Radios = () => (
  <>
    <div className="radios dashed-wrapper">
      <label className="radio">
        <input className="radio__area" type="radio" name="radio" />
        <Icon name="dot" className={"radio__icon"} />
      </label>
      <label className="radio">
        <input className="radio__area" type="radio" name="radio" checked />
        <Icon name="dot" className={"radio__icon"} />
      </label>
    </div>
  </>
);
