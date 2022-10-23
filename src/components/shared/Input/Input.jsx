import styles from "./InputField.module.css";
import { ICON_MAP } from "../Icon/Icon";
import cn from "classnames";
import { Button, BUTTON_SIZE, BUTTON_STYLE } from "../Button/Button";

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
  style = INPUT_STYLE.default,
}) => {
  const inputStyleNames = cn(styles._, {
    [styles.default]: style === INPUT_STYLE.default,
    [styles.disabled]: style === INPUT_STYLE.disabled,
    [styles.incorrect]: style === INPUT_STYLE.incorrect,
    [className]: !!className,
  });

  return (
    <div className={inputStyleNames}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.area_container}>
        <input
          className={styles.area}
          id={id}
          value={value}
          placeholder={placeholder}
          disabled={style === INPUT_STYLE.disabled}
        />
        {style === INPUT_STYLE.incorrect && (
          <Button
            className={styles.cross_button}
            icon={ICON_MAP.xMedium}
            iconClassName={styles.icon}
            style={BUTTON_STYLE.reverse}
            size={BUTTON_SIZE.small}
          />
        )}
        {style === INPUT_STYLE.disabled && (
          <Button
            className={styles.lock_button}
            icon={ICON_MAP.locked}
            iconClassName={styles.icon}
            style={BUTTON_STYLE.reverse}
            size={BUTTON_SIZE.small}
            disabled
          />
        )}
      </div>
    </div>
  );
};

export const Inputs = () => (
  <>
    <div className={cn(styles.inputs, "dashed-wrapper")}>
      <Input
        style={INPUT_STYLE.default}
        id={"inputField_empty1"}
        label={"Дата и время заказа"}
        placeholder={"Введите"}
      />
      <Input
        style={INPUT_STYLE.incorrect}
        id={"inputField_incorrect1"}
        label={"Дата и время заказа"}
        placeholder={"Введите"}
      />
      <Input
        style={INPUT_STYLE.disabled}
        id={"inputField_disabled1"}
        label={"Дата и время заказа"}
        placeholder={"Введите"}
        value={"12.12.2012"}
      />
    </div>
  </>
);
