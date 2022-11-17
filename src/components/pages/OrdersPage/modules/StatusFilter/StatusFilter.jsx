import cn from "classnames";
import { useMemo } from "react";
import styles from "./StatusFilter.module.css";
import { Input } from "../../../../shared/Input/Input";
import { Dropdown } from "../../../../shared/Dropdown/Dropdown";
import { Icon, ICON_MAP } from "../../../../shared/Icon/Icon";
import { Checkbox } from "../../../../shared/Checkbox/Checkbox";

export const STATUS_MAP = {
  new: "Новый",
  calculation: "Расчет",
  accepted: "Подтвержден",
  paused: "Отложен",
  done: "Выполнен",
  cancelled: "Отменен",
};

export const StatusFilter = ({
  className,
  statusValues,
  handleChangeStatusValues,
}) => {
  const checkedStatuses = useMemo(() => {
    const statuses = statusValues.map((status) => STATUS_MAP[status]);
    if (
      !statuses.length ||
      statuses.length === Object.keys(STATUS_MAP).length
    ) {
      return "Любой";
    } else {
      return statuses.join(", ");
    }
  }, [statusValues]);

  const classNames = cn(styles._, className);
  const postfixIcon = <Icon name={ICON_MAP.vArrow} className={styles.icon} />;
  const input = (
    <div className={classNames}>
      <Input
        label="Статус заказа"
        placeholder={"Любой"}
        value={checkedStatuses}
        readOnly={true}
        postfix={postfixIcon}
      />
    </div>
  );

  const overlay = (
    <div className={styles.list}>
      {Object.keys(STATUS_MAP).map((key) => (
        <li key={key} className={styles.item}>
          <Checkbox
            key={key}
            text={STATUS_MAP[key]}
            value={key}
            onClick={() => handleChangeStatusValues(key)}
            checked={statusValues.includes(key)}
            className={styles.control}
            iconClassName={styles.control_icon}
          />
        </li>
      ))}
    </div>
  );
  return <Dropdown trigger={input} overlay={overlay} className={className} />;
};
