import styles from "./Checkbox.module.css";
import { Icon, ICON_MAP } from "../Icon/Icon";
import cn from "classnames";

const noop = () => {};

export const Checkbox = ({
  className,
  checked,
  onChange = noop,
  onClick = noop,
  text,
  isTextOnly,
  iconClassName,
  id,
}) => {
  const checkboxClassNames = cn(styles._, className);

  const inputClassNames = cn(styles.area, {
    [styles.hidden]: isTextOnly,
  });

  const iconClassNames = cn(styles.icon, iconClassName);

  return (
    <label className={checkboxClassNames} id={id}>
      <input
        className={inputClassNames}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        onClick={onClick}
      />
      {!isTextOnly && (
        <Icon name={ICON_MAP.checkmark} className={iconClassNames} />
      )}
      {text && <span className={styles.text}>{text}</span>}
    </label>
  );
};
