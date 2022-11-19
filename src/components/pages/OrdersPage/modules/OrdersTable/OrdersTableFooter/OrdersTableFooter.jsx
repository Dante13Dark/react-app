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
import { STATUS_MAP } from "../../Filters/StatusFilter/StatusFilter";
import { Pagination } from "./Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedIDs } from "../../../model/orders/ordersSelectors";
import { removeOrder, updateOrder } from "../../../model/orders/ordersSlice";
import { clearSelectedIDs } from "../../../model/ordersForm/ordersFormSlice";

export const OrdersTableFooter = () => {
  const selectedIDs = useSelector(getSelectedIDs);
  const dispatch = useDispatch();

  const handleRemoveItems = () => {
    selectedIDs.forEach((id) => {
      dispatch(removeOrder(id));
    });
    dispatch(clearSelectedIDs());
  };

  const handleUpdateStatus = (selectedValue) => {
    selectedIDs.forEach((id) => {
      dispatch(updateOrder({ id: id, key: "status", value: selectedValue }));
    });
  };

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
            onChange={() => handleUpdateStatus(key)}
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
      <span className={styles.title}>
        {`Удалить ${selectedIDs.length} записей?`}
      </span>
      <Button
        size={BUTTON_SIZE.small}
        buttonStyle={BUTTON_STYLE.reverse}
        onClick={handleRemoveItems}
      >
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
        {selectedIDs.length > 0 && (
          <>
            <span className={styles.text}>
              Выбрано записей: {selectedIDs.length}
            </span>
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
          </>
        )}
      </div>
      <Pagination />
    </TableFooter>
  );
};
