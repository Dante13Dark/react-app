import styles from "./TableHeaderCell.module.css";
import cn from "classnames";

export const TableHeaderCell = ({ className, children, ...props }) => {
  return (
    <div className={cn(styles._, className)} {...props}>
      {children}
    </div>
  );
};
