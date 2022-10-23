import styles from "./Checkbox.module.css";
import { Icon, ICON_MAP } from "../Icon/Icon";
import cn from "classnames";

const noop = () => {};

export const Checkbox = ({ className, checked, onChange = noop, text }) => {
  let checkboxClassNames = cn(styles._, {
    [className]: !!className,
  });
  return (
    <label className={checkboxClassNames}>
      <input
        className={styles.area}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <Icon name={ICON_MAP.checkmark} className={styles.icon} />
      {text && <span className={styles.text}>{text}</span>}
    </label>
  );
};

export const Checkboxes = () => (
  <>
    <div className={cn(styles.checkboxes, "dashed-wrapper")}>
      <Checkbox checked />
      <Checkbox />
    </div>
  </>
);
