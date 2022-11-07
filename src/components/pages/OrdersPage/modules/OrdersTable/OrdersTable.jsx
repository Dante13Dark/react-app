import styles from "./OrdersTable.module.css";
import { Table } from "../../../../shared/TableElements/Table/Table";
import { TableHeader } from "../../../../shared/TableElements/TableHeader/TableHeader";
import { TableRow } from "../../../../shared/TableElements/TableRow/TableRow";
import { TableHeaderCell } from "../../../../shared/TableElements/TableHeaderCell/TableHeaderCell";
import { TableBody } from "../../../../shared/TableElements/TableBody/TableBody";
import { TableCell } from "../../../../shared/TableElements/TableCell/TableCell";
import { Checkbox } from "../../../../shared/Checkbox/Checkbox";
import { StatusCell } from "./StatusCell/StatusCell";
import { useSelector } from "react-redux";
import { getOrdersData } from "../../model/orders/ordersSelectors";
import { OrdersTableFooter } from "./OrdersTableFooter/OrdersTableFooter";

const noop = () => {};
const STATUS_NAME = {
  new: "Новый",
  calculation: "Расчет",
  confirmed: "Подтвержден",
  postponed: "Отложен",
  completed: "Выполнен",
  declined: "Отменен",
};

export const OrdersTable = () => {
  const orders = useSelector(getOrdersData);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell className={styles.checkbox_cell}>
            <Checkbox />
          </TableHeaderCell>
          <TableHeaderCell className={styles.order_cell}>#</TableHeaderCell>
          <TableHeaderCell className={styles.date_cell} onClick={noop}>
            Дата
          </TableHeaderCell>
          <TableHeaderCell className={styles.status_cell} onClick={noop}>
            Статус
          </TableHeaderCell>
          <TableHeaderCell className={styles.count_cell} onClick={noop}>
            Позиций
          </TableHeaderCell>
          <TableHeaderCell className={styles.amount_cell} onClick={noop}>
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
