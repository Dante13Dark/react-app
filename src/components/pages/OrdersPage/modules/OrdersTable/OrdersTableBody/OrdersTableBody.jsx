import styles from "../OrdersTable.module.css";
import { TableBody } from "../../../../../shared/TableElements/TableBody/TableBody";
import { TableRow } from "../../../../../shared/TableElements/TableRow/TableRow";
import { TableCell } from "../../../../../shared/TableElements/TableCell/TableCell";
import { Checkbox } from "../../../../../shared/Checkbox/Checkbox";
import { StatusCell } from "../StatusCell/StatusCell";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPageOrders,
  getSelectedIDs,
} from "../../../model/orders/ordersSelectors";
import {
  addSelectedIDs,
  removeSelectedIDs,
} from "../../../model/ordersForm/ordersFormSlice";
import { useEffect, useState } from "react";
import { OrdersForm } from "../../OrdersForm/OrdersForm";
import { formatAmount, formatDate } from "../../../utils/Formatters";
import { loadOrders } from "../../../model/orders/ordersSlice";

const STATUS_NAME = {
  new: "Новый",
  calculation: "Расчет",
  accepted: "Подтвержден",
  paused: "Отложен",
  done: "Выполнен",
  cancelled: "Отменен",
};

export const OrdersTableBody = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadOrders());
  }, [dispatch]);

  const [isModalActive, setIsModalActive] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const orders = useSelector(getCurrentPageOrders);
  const selectedIDs = useSelector(getSelectedIDs);

  const handleRowClick = (id) => (event) => {
    const checkbox = document.getElementById(`checkbox_${id}`);
    if (!checkbox.contains(event.target)) {
      console.log("row click ", id);
      setOrderId(id);
      setIsModalActive(true);
    }
  };

  const handleCheckboxClick = (id) => (event) => {
    if (selectedIDs.includes(id)) {
      dispatch(removeSelectedIDs(id));
    } else {
      dispatch(addSelectedIDs(id));
    }
    event.stopPropagation();
  };

  return (
    <>
      <TableBody>
        {orders.map((order) => (
          <TableRow
            className={styles.bordered}
            key={order.id}
            onClick={handleRowClick(order.id)}
          >
            <TableCell className={styles.checkbox_cell}>
              <Checkbox
                id={`checkbox_${order.id}`}
                checked={selectedIDs.includes(order.id)}
                onClick={handleCheckboxClick(order.id)}
              />
            </TableCell>
            <TableCell className={styles.order_cell}>
              {order.orderNumber}
            </TableCell>
            <TableCell className={styles.date_cell}>
              {formatDate(order.date)}
            </TableCell>
            <StatusCell className={styles.status_cell} status={order.status}>
              {STATUS_NAME[order.status]}
            </StatusCell>
            <TableCell className={styles.count_cell}>{order.count}</TableCell>
            <TableCell className={styles.amount_cell}>
              {formatAmount(order.amount, order.currency)}
            </TableCell>
            <TableCell className={styles.client_cell}>
              {order.customer}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {isModalActive && (
        <OrdersForm modalSetter={setIsModalActive} orderId={orderId} />
      )}
    </>
  );
};
