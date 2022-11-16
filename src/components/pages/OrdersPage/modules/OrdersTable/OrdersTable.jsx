import styles from "./OrdersTable.module.css";
import { Table } from "../../../../shared/TableElements/Table/Table";
import { TableRow } from "../../../../shared/TableElements/TableRow/TableRow";
import { TableBody } from "../../../../shared/TableElements/TableBody/TableBody";
import { TableCell } from "../../../../shared/TableElements/TableCell/TableCell";
import { Checkbox } from "../../../../shared/Checkbox/Checkbox";
import { StatusCell } from "./StatusCell/StatusCell";
import { useDispatch, useSelector } from "react-redux";
import { OrdersTableFooter } from "./OrdersTableFooter/OrdersTableFooter";
import {
  getCurrentPageOrders,
  getSelectedIDs,
} from "../../model/orders/ordersSelectors";
import {
  addSelectedIDs,
  removeSelectedIDs,
} from "../../model/ordersForm/ordersFormSlice";
import { OrdersTableHeader } from "./OrdersTableHeader/OrdersTableHeader";

const STATUS_NAME = {
  new: "Новый",
  calculation: "Расчет",
  accepted: "Подтвержден",
  paused: "Отложен",
  done: "Выполнен",
  cancelled: "Отменен",
};

export const OrdersTable = () => {
  const dispatch = useDispatch();
  const orders = useSelector(getCurrentPageOrders);
  const selectedIDs = useSelector(getSelectedIDs);

  const handleRowClick = (id) => (event) => {
    const checkbox = document.getElementById(`checkbox_${id}`);
    if (!checkbox.contains(event.target)) {
      console.log("row click ", id);
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
    <Table>
      <OrdersTableHeader />
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
      <OrdersTableFooter />
    </Table>
  );
};

function formatDate(dateString) {
  const formatter = Intl.DateTimeFormat("ru-RU", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  const date = new Date(dateString);
  return formatter.format(date);
}

function formatAmount(amount, currency) {
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: currency,

    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return formatter.format(amount);
}
