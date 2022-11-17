import styles from "./TableHeaderCell.module.css";
import cn from "classnames";
import { Icon, ICON_MAP } from "../../Icon/Icon";

export const TableHeaderCell = ({
  className,
  children,
  onClick,
  iconClassName,
  ...props
}) => {
  return (
    <div className={cn(styles._, className)} onClick={onClick} {...props}>
      {children}
      {onClick && (
        <Icon
          name={ICON_MAP.vArrow}
          className={cn(styles.icon, iconClassName)}
        />
      )}
    </div>
  );
};
