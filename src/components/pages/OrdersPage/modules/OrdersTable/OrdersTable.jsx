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
  getSortType,
} from "../../model/orders/ordersSelectors";
import {
  setSortDirection,
  setSortType,
} from "../../model/ordersFilter/ordersFilterSlice";
import cn from "classnames";

const STATUS_NAME = {
  new: "Новый",
  calculation: "Расчет",
  confirmed: "Подтвержден",
  postponed: "Отложен",
  completed: "Выполнен",
  declined: "Отменен",
};

export const OrdersTable = () => {
  const dispatch = useDispatch();
  const currentSortType = useSelector(getSortType);
  const currentSortDirection = useSelector(getSortDirection);
  const orders = useSelector(getCurrentPageOrders);

  const handleHeaderCellClick = (sortType) => {
    if (currentSortType === sortType) {
      dispatch(setSortDirection(!currentSortDirection));
    } else {
      dispatch(setSortType(sortType));
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
              [styles.selected]: currentSortType === "date",
            })}
            iconClassName={cn({
              [styles.icon_reverse]:
                currentSortType === "date" && currentSortDirection === false,
            })}
            onClick={() => handleHeaderCellClick("date")}
          >
            Дата
          </TableHeaderCell>
          <TableHeaderCell
            className={cn(styles.status_cell, {
              [styles.selected]: currentSortType === "status",
            })}
            iconClassName={cn({
              [styles.icon_reverse]:
                currentSortType === "status" && currentSortDirection === false,
            })}
            onClick={() => handleHeaderCellClick("status")}
          >
            Статус
          </TableHeaderCell>
          <TableHeaderCell
            className={cn(styles.count_cell, {
              [styles.selected]: currentSortType === "count",
            })}
            iconClassName={cn({
              [styles.icon_reverse]:
                currentSortType === "count" && currentSortDirection === false,
            })}
            onClick={() => handleHeaderCellClick("count")}
          >
            Позиций
          </TableHeaderCell>
          <TableHeaderCell
            className={cn(styles.amount_cell, {
              [styles.selected]: currentSortType === "amount",
            })}
            iconClassName={cn({
              [styles.icon_reverse]:
                currentSortType === "amount" && currentSortDirection === false,
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
            <TableCell className={styles.order_cell}>{order.id}</TableCell>
            <TableCell className={styles.date_cell}>{order.date}</TableCell>
            <StatusCell className={styles.status_cell} status={order.status}>
              {STATUS_NAME[order.status]}
            </StatusCell>
            <TableCell className={styles.count_cell}>{order.amount}</TableCell>
            <TableCell className={styles.amount_cell}>{order.sum}</TableCell>
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
