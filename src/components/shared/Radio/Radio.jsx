import styles from "./Radio.module.css";
import { Icon, ICON_MAP } from "../Icon/Icon";
import cn from "classnames";

const noop = () => {};

export const Radio = ({
  className,
  text,
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
      {text && <span className={textClassNames}>{text}</span>}
    </label>
  );
};

export const Radios = () => (
  <>
    <div className={cn(styles.radios, "dashed-wrapper")}>
      <Radio name="radio" value="1" text="Text1" />
      <Radio name="radio" value="2" text="Text2" />
      <Radio name="radio" value="3" text="Text3" />
    </div>
  </>
);
