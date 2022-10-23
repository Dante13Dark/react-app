import styles from "./Dropdown.module.css";
import checkboxStyles from "../Checkbox/Checkbox.module.css";
import radioStyles from "../Radio/Radio.module.css";
import { ICON_MAP } from "../Icon/Icon";
import React from "react";
import { useState } from "react";
import cn from "classnames";
import { Checkbox } from "../Checkbox/Checkbox";
import { Radio } from "../Radio/Radio";
import { Input, INPUT_STYLE } from "../Input/Input";
import { Button, BUTTON_SIZE, BUTTON_STYLE } from "../Button/Button";

const DROPDOWN_STYLE = {
  list: styles.withList,
  input: styles.withInput,
  dialog: styles.withDialog,
};
const composeHandlers = (handler1, handler2) => {
  handler1();
  if (handler2) {
    handler2();
  }
  return undefined;
};

export const Dropdown = ({
  trigger,
  overlay,
  childrenClassName,
  style = DROPDOWN_STYLE.list,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const composedHandlers = composeHandlers(
    toggleDropdown,
    trigger.props.onClick
  );
  const myTrigger = React.cloneElement(trigger, { onClick: composedHandlers });

  const dropdownClassNames = cn(styles._, {
    [styles.withList]: style === DROPDOWN_STYLE.list,
    [styles.withInput]: style === DROPDOWN_STYLE.input,
    [styles.withDialog]: style === DROPDOWN_STYLE.dialog,
    [className]: !!className,
  });

  return (
    <div className={dropdownClassNames}>
      {myTrigger}
      {isOpen && (
        <div className={cn(styles.list, childrenClassName)}>{overlay}</div>
      )}
    </div>
  );
};

export const Dropdowns = () => (
  <>
    <div className={cn(styles.dropdowns, "dashed-wrapper")}>
      <div className={cn(styles._, styles.withList, styles.dropdown_section1)}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Checkbox className={checkboxStyles.item} text="Новый" />
          </li>
          <li className={styles.item}>
            <Checkbox className={checkboxStyles.item} text="Расчет" />
          </li>
          <li className={styles.item}>
            <Checkbox className={checkboxStyles.item} text="Подтвержден" />
          </li>
          <li className={styles.item}>
            <Checkbox className={checkboxStyles.item} text="Отложен" />
          </li>
          <li className={styles.item}>
            <Checkbox className={checkboxStyles.item} text="Выполнен" />
          </li>
          <li className={styles.item}>
            <Checkbox className={checkboxStyles.item} text="Отменен" />
          </li>
        </ul>
      </div>

      <form className={cn(styles._, styles.withList, styles.dropdown_section2)}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Radio
              className={radioStyles.item}
              text={"Новый"}
              name={"dropdown-selector"}
              value={"new"}
              isTextOnly={true}
            />
          </li>
          <li className={styles.item}>
            <Radio
              className={radioStyles.item}
              text={"Расчет"}
              name={"dropdown-selector"}
              value={"calculation"}
              isTextOnly={true}
              checked
            />
          </li>
          <li className={styles.item}>
            <Radio
              className={radioStyles.item}
              text={"Подтвержден"}
              name={"dropdown-selector"}
              value={"accepted"}
              isTextOnly={true}
            />
          </li>
          <li className={styles.item}>
            <Radio
              className={radioStyles.item}
              text={"Отложен"}
              name={"dropdown-selector"}
              value={"paused"}
              isTextOnly={true}
            />
          </li>
          <li className={styles.item}>
            <Radio
              className={radioStyles.item}
              text={"Выполнен"}
              name={"dropdown-selector"}
              value={"done"}
              isTextOnly={true}
            />
          </li>
          <li className={styles.item}>
            <Radio
              className={radioStyles.item}
              text={"Отменен"}
              name={"dropdown-selector"}
              value={"cancelled"}
              isTextOnly={true}
            />
          </li>
        </ul>
      </form>

      <form
        className={cn(styles._, styles.withInput, styles.dropdown_section3)}
      >
        <Input
          style={INPUT_STYLE.default}
          id={"dropdown__inputField"}
          label={"Номер страницы"}
          placeholder={"Введите"}
        />
      </form>

      <div
        className={cn(styles._, styles.withDialog, styles.dropdown_section4)}
      >
        <div className={styles.content}>
          <span className={styles.title}>Удалить n записей?</span>
          <Button
            className={styles.button}
            size={BUTTON_SIZE.small}
            style={BUTTON_STYLE.reverse}
            title={"Удалить"}
          />
          <Button
            className={styles.button}
            size={BUTTON_SIZE.small}
            style={BUTTON_STYLE.primary}
            title={"Отмена"}
          />
        </div>
      </div>

      <div
        className={cn(styles._, styles.withDialog, styles.dropdown_section5)}
      >
        <div className={styles.content}>
          <span className={styles.title}>Выберите тему</span>
          <Button
            className={styles.button}
            size={BUTTON_SIZE.small}
            style={BUTTON_STYLE.reverse}
            title={"Светлая"}
            icon={ICON_MAP.sun}
          />
          <Button
            className={styles.button}
            size={BUTTON_SIZE.small}
            style={BUTTON_STYLE.primary}
            title={"Темная"}
            icon={ICON_MAP.moon}
          />
        </div>
      </div>
    </div>
  </>
);
