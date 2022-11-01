import styles from "./TableBody.module.css";
import cn from "classnames";

export const TableBody = ({ className, children, ...props }) => {
  return (
    <div className={cn(styles._, className)} {...props}>
      {children}
    </div>
  );
};
