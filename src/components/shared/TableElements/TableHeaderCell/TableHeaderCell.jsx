import styles from "./TableHeaderCell.module.css";
import cn from "classnames";
import { Icon, ICON_MAP } from "../../Icon/Icon";

export const TableHeaderCell = ({ className, children, onClick, ...props }) => {
  return (
    <div className={cn(styles._, className)} {...props}>
      {children}
      {onClick && <Icon name={ICON_MAP.vArrow} className={styles.icon} />}
    </div>
  );
};
