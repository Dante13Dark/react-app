import styles from "./OrdersFormFooter.module.css";
import { ICON_MAP } from "../../../../../shared/Icon/Icon";
import {
  Button,
  BUTTON_SIZE,
  BUTTON_STYLE,
} from "../../../../../shared/Button/Button";

export const OrdersFormFooter = ({ handleSaveButtonClick, errorText }) => {
  const isShowError = errorText.length > 0;
  return (
    <div className={styles._}>
      {isShowError && <span className={styles.error}>{errorText}</span>}
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
