import styles from "./TableCell.module.css";
import cn from "classnames";

export const TableCell = ({ className, children, ...props }) => {
  return (
    <div className={cn(styles._, className)} {...props}>
      {children}
    </div>
  );
};
