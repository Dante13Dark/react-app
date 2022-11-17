import styles from "./OrdersTable.module.css";
import { Table } from "../../../../shared/TableElements/Table/Table";
import { TableHeader } from "../../../../shared/TableElements/TableHeader/TableHeader";
import { TableRow } from "../../../../shared/TableElements/TableRow/TableRow";
import { TableHeaderCell } from "../../../../shared/TableElements/TableHeaderCell/TableHeaderCell";
import { TableBody } from "../../../../shared/TableElements/TableBody/TableBody";
import { TableCell } from "../../../../shared/TableElements/TableCell/TableCell";
import { Checkbox } from "../../../../shared/Checkbox/Checkbox";
import { StatusCell } from "./StatusCell/StatusCell";
import { useDispatch, useSelector } from "react-redux";
import { OrdersTableFooter } from "./OrdersTableFooter/OrdersTableFooter";
import {
  getCurrentPageOrders,
  getSortDirection,
  getSortField,
} from "../../model/orders/ordersSelectors";
import {
  setSortDirection,
  setSortField,
} from "../../model/ordersFilter/ordersFilterSlice";
import cn from "classnames";

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
  const currentSortField = useSelector(getSortField);
  const currentSortDirection = useSelector(getSortDirection);
  const orders = useSelector(getCurrentPageOrders);

  const handleHeaderCellClick = (sortField) => {
    if (currentSortField === sortField) {
      dispatch(setSortDirection(!currentSortDirection));
    } else {
      dispatch(setSortField(sortField));
      dispatch(setSortDirection(true));
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell className={styles.checkbox_cell}>
            <Checkbox />
          </TableHeaderCell>
          <TableHeaderCell className={styles.order_cell}>#</TableHeaderCell>
          <TableHeaderCell
            className={cn(styles.date_cell, {
              [styles.selected]: currentSortField === "date",
            })}
            iconClassName={cn({
              [styles.icon_reverse]:
                currentSortField === "date" && currentSortDirection === false,
            })}
            onClick={() => handleHeaderCellClick("date")}
          >
            Дата
          </TableHeaderCell>
          <TableHeaderCell
            className={cn(styles.status_cell, {
              [styles.selected]: currentSortField === "status",
            })}
            iconClassName={cn({
              [styles.icon_reverse]:
                currentSortField === "status" && currentSortDirection === false,
            })}
            onClick={() => handleHeaderCellClick("status")}
          >
            Статус
          </TableHeaderCell>
          <TableHeaderCell
            className={cn(styles.count_cell, {
              [styles.selected]: currentSortField === "count",
            })}
            iconClassName={cn({
              [styles.icon_reverse]:
                currentSortField === "count" && currentSortDirection === false,
            })}
            onClick={() => handleHeaderCellClick("count")}
          >
            Позиций
          </TableHeaderCell>
          <TableHeaderCell
            className={cn(styles.amount_cell, {
              [styles.selected]: currentSortField === "amount",
            })}
            iconClassName={cn({
              [styles.icon_reverse]:
                currentSortField === "amount" && currentSortDirection === false,
            })}
            onClick={() => handleHeaderCellClick("amount")}
          >
            Сумма
          </TableHeaderCell>
          <TableHeaderCell className={styles.client_cell}>
            ФИО покупателя
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow className={styles.bordered} key={order.id}>
            <TableCell className={styles.checkbox_cell}>
              <Checkbox />
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
