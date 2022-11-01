import styles from "./TableHeader.module.css";
import cn from "classnames";

export const TableHeader = ({ className, children, ...props }) => {
  return (
    <div className={cn(styles._, className)} {...props}>
      {children}
    </div>
  );
};
