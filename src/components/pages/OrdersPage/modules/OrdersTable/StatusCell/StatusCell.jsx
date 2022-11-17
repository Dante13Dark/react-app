import styles from "./StatusCell.module.css";
import { Icon, ICON_MAP } from "../../../../../shared/Icon/Icon";
import cn from "classnames";
import { TableCell } from "../../../../../shared/TableElements/TableCell/TableCell";

const STATUS_MAP = {
  new: {
    icon: ICON_MAP.dot,
    statusStyle: styles.warning,
  },
  calculation: {
    icon: ICON_MAP.dot,
    statusStyle: styles.waiting,
  },
  accepted: {
    icon: ICON_MAP.dot,
    statusStyle: styles.waiting,
  },
  paused: {
    icon: ICON_MAP.dot,
    statusStyle: styles.warning,
  },
  done: {
    icon: ICON_MAP.checkmark,
    statusStyle: styles.success,
  },
  cancelled: {
    icon: ICON_MAP.abort,
    statusStyle: styles.failure,
  },
};

export const StatusCell = ({ className, status, children }) => {
  return (
    <TableCell className={className}>
      <span className={cn(styles._, STATUS_MAP[status].statusStyle)}>
        <Icon name={STATUS_MAP[status].icon} className={cn(styles.icon)} />
        {children}
      </span>
    </TableCell>
  );
};
