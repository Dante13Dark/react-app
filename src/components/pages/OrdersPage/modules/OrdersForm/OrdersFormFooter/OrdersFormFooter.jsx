import styles from "./OrdersFormFooter.module.css";
import { ICON_MAP } from "../../../../../shared/Icon/Icon";
import {
  Button,
  BUTTON_SIZE,
  BUTTON_STYLE,
} from "../../../../../shared/Button/Button";

export const OrdersFormFooter = ({ setIsModalActive }) => {
  const handleSaveButtonClick = () => {
    // Если нет ошибок обновить параметры заказа
    setIsModalActive(false);
  };

  return (
    <div className={styles._}>
      {/*{isMessageActive && <span className={styles.message}>{message}</span>}*/}
      <Button
        icon={ICON_MAP.checkmark}
        buttonStyle={BUTTON_STYLE.primary}
        size={BUTTON_SIZE.medium}
        onClick={handleSaveButtonClick}
      >
        Сохранить
      </Button>
    </div>
  );
};
