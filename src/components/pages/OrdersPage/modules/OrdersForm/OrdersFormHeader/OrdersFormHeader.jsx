import styles from "./OrdersFormHeader.module.css";
import { Dropdown } from "../../../../../shared/Dropdown/Dropdown";
import {
  Button,
  BUTTON_SIZE,
  BUTTON_STYLE,
} from "../../../../../shared/Button/Button";
import { ICON_MAP } from "../../../../../shared/Icon/Icon";
import cn from "classnames";
import { useState } from "react";

export const OrdersFormHeader = ({ orderNumber, setIsModalActive }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClearChangesClick = () => {
    setIsDropdownOpen(false);
    setIsModalActive(false);
  };

  const handleCancelClick = () => {
    setIsDropdownOpen(false);
  };

  const trigger = (
    <Button
      size={BUTTON_SIZE.medium}
      buttonStyle={BUTTON_STYLE.primary}
      icon={ICON_MAP.xLarge}
    />
  );

  const overlay = (
    <div className={styles.content}>
      <span className={styles.dropdown__title}>
        Есть несохраненные изменения
      </span>
      <Button
        size={BUTTON_SIZE.small}
        buttonStyle={BUTTON_STYLE.reverse}
        onClick={handleClearChangesClick}
      >
        Сбросить
      </Button>
      <Button
        size={BUTTON_SIZE.small}
        buttonStyle={BUTTON_STYLE.primary}
        onClick={handleCancelClick}
      >
        Остаться
      </Button>
    </div>
  );
  return (
    <div className={styles._}>
      <span className={styles.title}>{`Заявка #${orderNumber}`}</span>
      <Dropdown
        trigger={trigger}
        overlay={overlay}
        className={cn(styles.dropdown, styles.dialog)}
        outerState={[isDropdownOpen, setIsDropdownOpen]}
      />
    </div>
  );
};
