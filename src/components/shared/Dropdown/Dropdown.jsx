import styles from "./Dropdown.module.css";
import { ICON_MAP } from "../Icon/Icon";
import React from "react";
import { useState } from "react";
import cn from "classnames";
import { Input, INPUT_STYLE } from "../Input/Input";
import { Button, BUTTON_SIZE, BUTTON_STYLE } from "../Button/Button";
import {
  DropdownListItem,
  ITEM_TYPE,
} from "../DropdownListItem/DropdownListItem";

export const DROPDOWN_STYLE = {
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
  style = DROPDOWN_STYLE.list,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const composedHandlers = () =>
    composeHandlers(toggleDropdown, trigger.props.onClick);

  const myTrigger = React.cloneElement(trigger, { onClick: composedHandlers });

  const dropdownClassNames = cn(styles._, styles.overlay, className, {
    [styles.withList]: style === DROPDOWN_STYLE.list,
    [styles.withInput]: style === DROPDOWN_STYLE.input,
    [styles.withDialog]: style === DROPDOWN_STYLE.dialog,
  });

  let myOverlay;
  if (style === DROPDOWN_STYLE.input || style === DROPDOWN_STYLE.dialog) {
    myOverlay = <div className={styles.content}>{overlay}</div>;
  } else {
    myOverlay = overlay;
  }
  return (
    <div className={styles.wrapper}>
      {myTrigger}
      {isOpen && <div className={cn(dropdownClassNames)}>{myOverlay}</div>}
    </div>
  );
};

// MARK: - UIKit
export const Dropdowns = () => (
  <>
    <div className={cn(styles.dropdowns, "dashed-wrapper")}>
      <div className={cn(styles._, styles.withList, styles.dropdown_section1)}>
        <ul className={styles.list}>
          <DropdownListItem text={"Новый"} />
          <DropdownListItem text={"Расчет"} />
          <DropdownListItem text={"Подтвержден"} />
          <DropdownListItem text={"Отложен"} />
          <DropdownListItem text={"Выполнен"} />
          <DropdownListItem text={"Отменен"} />
        </ul>
      </div>

      <form className={cn(styles._, styles.withList, styles.dropdown_section2)}>
        <ul className={styles.list}>
          <DropdownListItem
            type={ITEM_TYPE.radio}
            text={"Новый"}
            name={"dropdown-selector"}
            value={"new"}
            isTextOnly={true}
          />
          <DropdownListItem
            type={ITEM_TYPE.radio}
            text={"Расчет"}
            name={"dropdown-selector"}
            value={"calculation"}
            isTextOnly={true}
            checked
          />
          <DropdownListItem
            type={ITEM_TYPE.radio}
            text={"Подтвержден"}
            name={"dropdown-selector"}
            value={"accepted"}
            isTextOnly={true}
          />
          <DropdownListItem
            type={ITEM_TYPE.radio}
            text={"Отложен"}
            name={"dropdown-selector"}
            value={"paused"}
            isTextOnly={true}
          />
          <DropdownListItem
            type={ITEM_TYPE.radio}
            text={"Выполнен"}
            name={"dropdown-selector"}
            value={"done"}
            isTextOnly={true}
          />
          <DropdownListItem
            type={ITEM_TYPE.radio}
            text={"Отменен"}
            name={"dropdown-selector"}
            value={"cancelled"}
            isTextOnly={true}
          />
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
