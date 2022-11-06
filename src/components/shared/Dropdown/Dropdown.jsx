import styles from "./Dropdown.module.css";
import cn from "classnames";

export const Dropdown = ({ trigger, overlay, isOpen, className }) => {
  const dropdownClassNames = cn(styles._, styles.overlay, className);

  return (
    <div className={styles.wrapper}>
      {trigger}
      {isOpen && <div className={cn(dropdownClassNames)}>{overlay}</div>}
    </div>
  );
};
