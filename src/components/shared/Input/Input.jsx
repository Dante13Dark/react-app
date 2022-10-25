import styles from "./InputField.module.css";
import { ICON_MAP } from "../Icon/Icon";
import cn from "classnames";
import { Button, BUTTON_SIZE, BUTTON_STYLE } from "../Button/Button";

const noop = () => {};
export const INPUT_STYLE = {
  default: styles.default,
  incorrect: styles.incorrect,
  disabled: styles.disabled,
  selectField: styles.selectField,
};

export const Input = ({
  className,
  id,
  value,
  placeholder,
  label,
  style = INPUT_STYLE.default,
  prefix,
  ...props
}) => {
  const inputStyleNames = cn(styles._, className, style);

  return (
    <div className={inputStyleNames}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.area_container}>
        {prefix && <span className={styles.prefix}>{prefix}</span>}
        <input
          className={styles.area}
          id={id}
          value={value}
          placeholder={placeholder}
          disabled={style === INPUT_STYLE.disabled}
          onChange={noop}
          {...props}
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
        {style === INPUT_STYLE.selectField && (
          <Button
            className={styles.vArrow_button}
            icon={ICON_MAP.vArrow}
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
