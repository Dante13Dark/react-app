import styles from "./TableRow.module.css";
import cn from "classnames";

export const TableRow = ({ className, children, ...props }) => {
  return (
    <div className={cn(styles._, className)} {...props}>
      {children}
    </div>
  );
};
