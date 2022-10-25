import cn from "classnames";
import { useMemo, useState } from "react";
import styles from "./StatusFilter.module.css";
import { Input, INPUT_STYLE } from "../../../../shared/Input/Input";
import { DropdownListItem } from "../../../../shared/DropdownListItem/DropdownListItem";
import { Dropdown, DROPDOWN_STYLE } from "../../../../shared/Dropdown/Dropdown";

const STATUS_MAP = {
  any: "Любой",
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

  const [statusValues, setStatusValues] = useState({
    new: true,
    calculation: false,
    accepted: false,
    paused: false,
    done: true,
    cancelled: false,
  });

  const handleChangeStatusValues = (el) => {
    console.log(el);
    setStatusValues({ ...statusValues, [el]: !statusValues[el] });
    console.log(statusValues);
  };

  const checkedStatuses = useMemo(() => {
    const statuses = Object.keys(statusValues)
      .filter((status) => statusValues[status])
      .map((status) => STATUS_MAP[status]);
    return statuses.length ? statuses.join(", ") : STATUS_MAP.any;
  }, [statusValues]);

  const classNames = cn(styles._, className);

  const input = (
    <div className={classNames}>
      <Input
        style={INPUT_STYLE.selectField}
        label="Статус заказа"
        placeholder={STATUS_MAP.any}
        onClick={handleToggleVisibility}
        value={checkedStatuses}
        readOnly={true}
      />
    </div>
  );

  const overlay = (
    <>
      <DropdownListItem
        text={"Новый"}
        name={"dropdown-selector"}
        value={"new"}
        onChange={() => handleChangeStatusValues("new")}
        checked={statusValues["new"]}
      />

      <DropdownListItem
        text={"Расчет"}
        name={"dropdown-selector"}
        value={"calculation"}
        onClick={() => handleChangeStatusValues("calculation")}
        checked={statusValues["calculation"]}
      />
      <DropdownListItem
        text={"Подтвержден"}
        name={"dropdown-selector"}
        value={"accepted"}
        onClick={() => handleChangeStatusValues("accepted")}
        checked={statusValues["accepted"]}
      />
      <DropdownListItem
        text={"Отложен"}
        name={"dropdown-selector"}
        value={"paused"}
        onClick={() => handleChangeStatusValues("paused")}
        checked={statusValues["paused"]}
      />
      <DropdownListItem
        text={"Выполнен"}
        name={"dropdown-selector"}
        value={"done"}
        onClick={() => handleChangeStatusValues("done")}
        checked={statusValues["done"]}
      />
      <DropdownListItem
        text={"Отменен"}
        name={"dropdown-selector"}
        value={"cancelled"}
        onClick={() => handleChangeStatusValues("cancelled")}
        checked={statusValues["cancelled"]}
      />
    </>
  );
  return (
    <Dropdown
      style={DROPDOWN_STYLE.list}
      trigger={input}
      overlay={overlay}
      className={className}
    />
  );
};
