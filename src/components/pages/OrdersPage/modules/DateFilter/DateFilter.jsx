import cn from "classnames";
import { Input } from "../../../../shared/Input/Input";
import styles from "./DateFilter.module.css";

export const DateFilter = ({ className }) => {
  const componentStyles = cn(styles._, className);
  return (
    <div className={componentStyles}>
      <Input label="Дата оформления" placeholder="dd.mm.yyyy" prefix="c" />
      <Input placeholder="dd.mm.yyyy" prefix="по" />
    </div>
  );
};
