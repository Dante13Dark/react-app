import cn from "classnames";
import { Input } from "../../../../shared/Input/Input";
import styles from "./AmountFilter.module.css";

export const AmountFilter = ({
  className,
  onChange,
  onReset,
  getFilterValue,
}) => {
  const handleOnReset = (key) => () => onReset(key);
  const handleOnChange = (key, event) => onChange(key)(event);

  const amountFilterClassNames = cn(styles._, className);

  return (
    <div className={amountFilterClassNames}>
      <Input
        label="Сумма заказа"
        placeholder="&#8381;"
        prefix="от"
        id="AmountFilterFrom"
        onChange={(event) => handleOnChange("amountFrom", event)}
        onReset={handleOnReset("amountFrom")}
        value={getFilterValue("amountFrom")}
      />
      <Input
        placeholder="&#8381;"
        prefix="до"
        id="AmountFilterTo"
        onChange={(event) => handleOnChange("amountTo", event)}
        onReset={handleOnReset("amountTo")}
        value={getFilterValue("amountTo")}
      />
    </div>
  );
};
