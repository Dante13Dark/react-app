import styles from "./Table.module.css";
import cn from "classnames";

export const Table = ({ className, children, ...props }) => {
  return (
    <div className={cn(styles._, className)} {...props}>
      {children}
    </div>
  );
};
