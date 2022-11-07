import styles from "./Radio.module.css";
import { Icon, ICON_MAP } from "../Icon/Icon";
import cn from "classnames";

const noop = () => {};

export const Radio = ({
  className,
  children,
  name,
  value,
  checked,
  onChange = noop,
  isTextOnly,
}) => {
  let radioClassNames = cn(styles._, className);

  let inputClassNames = cn(styles.area, {
    [styles.hidden]: isTextOnly,
  });

  let textClassNames = cn(styles.text);

  return (
    <label className={radioClassNames}>
      <input
        className={inputClassNames}
        type="radio"
        name={name}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      {!isTextOnly && <Icon name={ICON_MAP.dot} className={styles.icon} />}
      {children && <span className={textClassNames}>{children}</span>}
    </label>
  );
};
