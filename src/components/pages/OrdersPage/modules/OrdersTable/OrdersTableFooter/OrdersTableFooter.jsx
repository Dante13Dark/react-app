import { TableFooter } from "../../../../../shared/TableElements/TableFooter/TableFooter";
import styles from "./OrdersTableFooter.module.css";
import {
  Button,
  BUTTON_SIZE,
  BUTTON_STYLE,
} from "../../../../../shared/Button/Button";
import { ICON_MAP } from "../../../../../shared/Icon/Icon";
import { Radio } from "../../../../../shared/Radio/Radio";
import { Dropdown } from "../../../../../shared/Dropdown/Dropdown";
import cn from "classnames";
import { STATUS_MAP } from "../../StatusFilter/StatusFilter";

export const OrdersTableFooter = () => {
  const changeStatusTrigger = (
    <Button
      size={BUTTON_SIZE.small}
      buttonStyle={BUTTON_STYLE.primary}
      icon={ICON_MAP.pencil}
    >
      Изменить статус
    </Button>
  );
  const changeStatusOverlay = (
    <>
      {Object.keys(STATUS_MAP).map((key) => (
        <li className={styles.item} key={key}>
          <Radio
            isTextOnly={true}
            name={"change_status_dropdown"}
            value={key}
            className={styles.control}
          >
            {STATUS_MAP[key]}
          </Radio>
        </li>
      ))}
    </>
  );

  const deleteDropdownTrigger = (
    <Button
      size={BUTTON_SIZE.small}
      buttonStyle={BUTTON_STYLE.danger}
      icon={ICON_MAP.bin}
    >
      Удалить
    </Button>
  );

  const deleteDropdownOverlay = (
    <div className={styles.content}>
      <span className={styles.title}>Удалить n записей?</span>
      <Button size={BUTTON_SIZE.small} buttonStyle={BUTTON_STYLE.reverse}>
        Удалить
      </Button>
      <Button size={BUTTON_SIZE.small} buttonStyle={BUTTON_STYLE.primary}>
        Отмена
      </Button>
    </div>
  );

  return (
    <TableFooter>
      <div className={styles.buttonsBlock}>
        <span className={styles.text}>Выбрано записей: 5</span>
        <Dropdown
          trigger={changeStatusTrigger}
          overlay={changeStatusOverlay}
          className={cn(styles.dropdown, styles.list)}
        />
        <Dropdown
          trigger={deleteDropdownTrigger}
          overlay={deleteDropdownOverlay}
          className={cn(styles.dropdown, styles.dialog)}
        />
      </div>
      <div className={styles.pages}>
        <div className={styles.pagination}>
          <Button size={BUTTON_SIZE.small} buttonStyle={BUTTON_STYLE.reverse}>
            1
          </Button>
          <Button size={BUTTON_SIZE.small} buttonStyle={BUTTON_STYLE.reverse}>
            2
          </Button>
          <Button size={BUTTON_SIZE.small} buttonStyle={BUTTON_STYLE.reverse}>
            3
          </Button>
          <Button
            size={BUTTON_SIZE.small}
            buttonStyle={BUTTON_STYLE.reverse}
            disabled
          >
            ...
          </Button>
          <Button size={BUTTON_SIZE.small} buttonStyle={BUTTON_STYLE.reverse}>
            18
          </Button>
        </div>
        <Button size={BUTTON_SIZE.small} buttonStyle={BUTTON_STYLE.reverse}>
          #
        </Button>
      </div>
    </TableFooter>
  );
};
