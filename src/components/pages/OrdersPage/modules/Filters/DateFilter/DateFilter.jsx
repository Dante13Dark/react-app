import cn from "classnames";
import { Input } from "../../../../../shared/Input/Input";
import styles from "./DateFilter.module.css";

export const DateFilter = ({
  className,
  onChange,
  onReset,
  getFilterValue,
}) => {
  const handleOnReset = (key) => () => onReset(key);
  const handleOnChange = (key, event) => onChange(key)(event);
  const componentStyles = cn(styles._, className);
  return (
    <div className={componentStyles}>
      <Input
        label="Дата оформления"
        placeholder="dd.mm.yyyy"
        prefix="c"
        id="DateFilterFrom"
        onChange={(event) => handleOnChange("dateFrom", event)}
        onReset={handleOnReset("dateFrom")}
        value={getFilterValue("dateFrom")}
      />

      <Input
        placeholder="dd.mm.yyyy"
        prefix="по"
        id="DateFilterTo"
        onChange={(event) => handleOnChange("dateTo", event)}
        onReset={handleOnReset("dateTo")}
        value={getFilterValue("dateTo")}
      />
    </div>
  );
};
