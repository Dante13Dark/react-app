import styles from "./OrdersFormBody.module.css";
import { Input } from "../../../../../shared/Input/Input";
import { useState } from "react";
import { STATUS_MAP } from "../../Filters/StatusFilter/StatusFilter";
import { Radio } from "../../../../../shared/Radio/Radio";
import { Dropdown } from "../../../../../shared/Dropdown/Dropdown";
import cn from "classnames";
import { Icon, ICON_MAP } from "../../../../../shared/Icon/Icon";
import { formatDate } from "../../../utils/Formatters";
import { OrdersFormTable } from "./OrdersFormTable/OrdersFormTable";

export const OrdersFormBody = ({
  order,
  customerState,
  statusState,
  codeState,
  setError,
  validState,
}) => {
  const [customer, setCustomer] = customerState;
  const [selectedStatus, setSelectedStatus] = statusState;
  const [code, setCode] = codeState;
  const [isValid, setIsValid] = validState;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const postfixIcon = <Icon name={ICON_MAP.vArrow} className={styles.icon} />;
  const changeStatusTrigger = (
    <Input
      label="Статус заказа"
      postfix={postfixIcon}
      value={STATUS_MAP[selectedStatus]}
      readOnly
    />
  );
  const handleUpdateStatus = (selectedValue) => {
    setSelectedStatus(selectedValue);
    setIsDropdownOpen(false);
  };
  const changeStatusOverlay = (
    <>
      {Object.keys(STATUS_MAP).map((key) => (
        <li className={styles.item} key={key}>
          <Radio
            isTextOnly={true}
            name={"change_status_dropdown"}
            value={key}
            className={styles.control}
            checked={key === selectedStatus}
            onChange={() => handleUpdateStatus(key)}
          >
            {STATUS_MAP[key]}
          </Radio>
        </li>
      ))}
    </>
  );

  return (
    <div className={styles._}>
      <Input
        id="OrdersFormDate"
        value={formatDate(order.date)}
        label="Дата и время заказа"
        disabled
      />
      <Input
        id="OrdersFormName"
        autoFocus
        value={customer}
        onChange={(e) => {
          setIsValid(true);
          setError("");
          setCustomer(e.target.value);
        }}
        onReset={() => setCustomer("")}
        label="ФИО покупателя"
        placeholder="Введите ФИО покупателя"
        incorrect={!customer.length}
      />
      <OrdersFormTable />
      <Input
        id="OrdersFormLoyalty"
        label="Уровень лояльности"
        value="Новичок"
        disabled
      />
      <Dropdown
        trigger={changeStatusTrigger}
        overlay={changeStatusOverlay}
        className={cn(styles.dropdown, styles.list)}
        outerState={[isDropdownOpen, setIsDropdownOpen]}
      />
      <Input
        id="OrdersFormCode"
        label="Код подтверждения"
        placeholder="Введите цифровой код"
        incorrect={!isValid}
        value={code}
        onChange={(e) => {
          setIsValid(true);
          setError("");
          setCode(e.target.value);
        }}
        onReset={() => setCode("")}
      />
    </div>
  );
};
