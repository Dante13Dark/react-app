import cn from "classnames";
import { Input } from "../../../../shared/Input/Input";
import styles from "./AmountFilter.module.css";

export const AmountFilter = ({ className }) => {
  const amountFilterClassNames = cn(styles._, className);
  return (
    <div className={amountFilterClassNames}>
      <Input
        label="Сумма заказа"
        placeholder="&#8381;"
        prefix="от"
        id="AmountFilter"
      />
      <Input placeholder="&#8381;" prefix="до" id="AmountFilter" />
    </div>
  );
};
