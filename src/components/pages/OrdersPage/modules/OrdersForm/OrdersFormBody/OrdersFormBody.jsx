import styles from "./OrdersFormBody.module.css";
import { Input } from "../../../../../shared/Input/Input";
import { useState } from "react";
import { STATUS_MAP } from "../../Filters/StatusFilter/StatusFilter";
import { Radio } from "../../../../../shared/Radio/Radio";
import { Dropdown } from "../../../../../shared/Dropdown/Dropdown";
import cn from "classnames";
import { Icon, ICON_MAP } from "../../../../../shared/Icon/Icon";
import { formatDate } from "../../../utils/Formatters";

const CODE_MOCK = "000";

export const OrdersFormBody = ({ order }) => {
  const [customer, setCustomer] = useState(order.customer);
  const [code, setCode] = useState("");

  const [selectedStatus, setSelectedStatus] = useState(order.status);
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
        onChange={(e) => setCustomer(e.target.value)}
        onReset={() => setCustomer("")}
        label="ФИО покупателя"
        placeholder="Введите ФИО покупателя"
      />
      {/*<OrderTableModalBodyTable order={order} />*/}
      <Input
        id="OrdersFormLoyalty"
        label="Уровень лояльности"
        value="Новичек"
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
        incorrect={code !== CODE_MOCK && code !== ""}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        onReset={() => setCode("")}
      />
    </div>
  );
};
