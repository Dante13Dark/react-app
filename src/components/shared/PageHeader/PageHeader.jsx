import styles from "./PageHeader.module.css";
import cn from "classnames";

export const PageHeader = ({ className, title, children }) => {
  return (
    <div className={cn(styles._, className)}>
      <span className={styles.text}>{title}</span>
      {children}
    </div>
  );
};
