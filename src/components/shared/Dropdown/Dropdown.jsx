import styles from "./Dropdown.module.css";
import React from "react";
import { useState } from "react";
import cn from "classnames";

const composeHandlers = (handler1, handler2) => {
  handler1();
  if (handler2) {
    handler2();
  }
};

export const Dropdown = ({ trigger, overlay, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const composedHandlers = () =>
    composeHandlers(toggleDropdown, trigger.props.onClick);

  const myTrigger = React.cloneElement(trigger, { onClick: composedHandlers });

  const dropdownClassNames = cn(styles._, styles.overlay, className);

  return (
    <div className={styles.wrapper}>
      {myTrigger}
      {isOpen && <div className={cn(dropdownClassNames)}>{overlay}</div>}
    </div>
  );
};
