import styles from "./TableFooter.module.css";
import cn from "classnames";

export const TableFooter = ({ className, children, ...props }) => {
  return (
    <div className={cn(styles._, className)} {...props}>
      {children}
    </div>
  );
};
