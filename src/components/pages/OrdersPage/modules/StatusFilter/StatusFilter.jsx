import cn from "classnames";
import { useMemo, useState } from "react";
import styles from "./StatusFilter.module.css";
import { Input, INPUT_STYLE } from "../../../../shared/Input/Input";
import { DropdownListItem } from "../../../../shared/DropdownListItem/DropdownListItem";
import { Dropdown } from "../../../../shared/Dropdown/Dropdown";
import { Icon, ICON_MAP } from "../../../../shared/Icon/Icon";

const STATUS_MAP = {
  new: "Новый",
  calculation: "Расчет",
  accepted: "Подтвержден",
  paused: "Отложен",
  done: "Выполнен",
  cancelled: "Отменен",
};

export const StatusFilter = ({ className }) => {
  const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);
  const handleToggleVisibility = () => {
    setIsVisibleDropdown(!isVisibleDropdown);
  };

  const [statusValues, setStatusValues] = useState({});

  const handleChangeStatusValues = (el) => {
    setStatusValues({ ...statusValues, [el]: !statusValues[el] });
  };

  const checkedStatuses = useMemo(() => {
    const statuses = Object.keys(statusValues)
      .filter((status) => statusValues[status])
      .map((status) => STATUS_MAP[status]);
    if (
      !statuses.length ||
      statuses.length === Object.keys(statusValues).length
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
        inputStyle={INPUT_STYLE.default}
        label="Статус заказа"
        placeholder={"Любой"}
        onClick={handleToggleVisibility}
        value={checkedStatuses}
        readOnly={true}
        postfix={postfixIcon}
      />
    </div>
  );

  const overlay = (
    <div className={styles.list}>
      {Object.keys(STATUS_MAP).map((key) => (
        <DropdownListItem
          key={key}
          text={STATUS_MAP[key]}
          value={key}
          onClick={() => handleChangeStatusValues(key)}
          checked={statusValues[key]}
        />
      ))}
    </div>
  );
  return <Dropdown trigger={input} overlay={overlay} className={className} />;
};
