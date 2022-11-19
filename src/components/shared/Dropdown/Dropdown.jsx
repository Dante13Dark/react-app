import styles from "./Dropdown.module.css";
import cn from "classnames";
import { cloneElement, useEffect, useRef, useState } from "react";

export const Dropdown = ({ trigger, overlay, className, outerState }) => {
  let [isOpen, setIsOpen] = useState(false);
  if (outerState) {
    [isOpen, setIsOpen] = outerState;
  }

  const triggerRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!Object(triggerRef.current).contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const modifiedTrigger = cloneElement(trigger, {
    onClick: (e) => {
      e.preventDefault();
      setIsOpen(!isOpen);
    },
  });

  const dropdownClassNames = cn(styles._, styles.overlay, className);
  return (
    <div className={styles.wrapper} ref={triggerRef}>
      {modifiedTrigger}
      {isOpen && <div className={cn(dropdownClassNames)}>{overlay}</div>}
    </div>
  );
};
