import styles from "./InputField.module.css";
import { Icon, ICON_MAP } from "../Icon/Icon";
import cn from "classnames";
import { Button, BUTTON_SIZE, BUTTON_STYLE } from "../Button/Button";

const noop = () => {};
export const INPUT_STYLE = {
  default: styles.default,
  incorrect: styles.incorrect,
  disabled: styles.disabled,
};

export const Input = ({
  className,
  id,
  value,
  placeholder,
  label,
  inputStyle = INPUT_STYLE.default,
  prefix,
  postfix,
  ...props
}) => {
  const inputStyleNames = cn(styles._, className, inputStyle);

  return (
    <div className={inputStyleNames}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={styles.area_container}>
        {prefix && <span className={styles.prefix}>{prefix}</span>}
        <input
          className={styles.area}
          id={id}
          value={value}
          placeholder={placeholder}
          disabled={inputStyle === INPUT_STYLE.disabled}
          onChange={noop}
          {...props}
        />
        {postfix && postfix}
        {inputStyle === INPUT_STYLE.incorrect && (
          <Button
            className={styles.cross_button}
            icon={ICON_MAP.xMedium}
            iconClassName={styles.icon}
            buttonStyle={BUTTON_STYLE.reverse}
            size={BUTTON_SIZE.small}
          />
        )}
        {inputStyle === INPUT_STYLE.disabled && (
          <Icon name={ICON_MAP.locked} className={styles.lock_icon} />
        )}
      </div>
    </div>
  );
};
