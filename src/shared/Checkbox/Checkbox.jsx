import "./Checkbox.css";
import { Icon } from "../Icon/Icon";

export const Checkboxes = () => (
  <>
    <div className="checkboxes dashed-wrapper">
      <label className="checkbox">
        <input className="checkbox__area" type="checkbox" />
        <Icon name="checkmark" className={"checkbox__icon"} />
      </label>
      <label className="checkbox">
        <input className="checkbox__area" type="checkbox" checked />
        <Icon name="checkmark" className={"checkbox__icon"} />
      </label>
    </div>
  </>
);
