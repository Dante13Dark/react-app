import styles from "./OrdersTable.module.css";
import { Table } from "../../../../shared/TableElements/Table/Table";
import { TableHeader } from "../../../../shared/TableElements/TableHeader/TableHeader";
import { TableRow } from "../../../../shared/TableElements/TableRow/TableRow";
import { TableHeaderCell } from "../../../../shared/TableElements/TableHeaderCell/TableHeaderCell";
import { TableBody } from "../../../../shared/TableElements/TableBody/TableBody";
import { TableCell } from "../../../../shared/TableElements/TableCell/TableCell";
import { TableFooter } from "../../../../shared/TableElements/TableFooter/TableFooter";
import {
  Button,
  BUTTON_SIZE,
  BUTTON_STYLE,
} from "../../../../shared/Button/Button";
import { ICON_MAP } from "../../../../shared/Icon/Icon";
import { Checkbox } from "../../../../shared/Checkbox/Checkbox";
import cn from "classnames";
import { orders } from "./orders";
import { StatusCell } from "./StatusCell/StatusCell";

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
      <TableFooter>
        <div className={styles.footer__buttonsBlock}>
          <span className={styles.footer__text}>Выбрано записей: 5</span>
          <Button
            size={BUTTON_SIZE.small}
            buttonStyle={BUTTON_STYLE.primary}
            icon={ICON_MAP.pencil}
          >
            Изменить статус
          </Button>
          <Button
            size={BUTTON_SIZE.small}
            buttonStyle={cn(BUTTON_STYLE.danger)}
            icon={ICON_MAP.bin}
          >
            Удалить
          </Button>
        </div>
        <div className={styles.footer__pages}>
          <div className={styles.footer__pagination}>
            <Button size={BUTTON_SIZE.small} buttonStyle={BUTTON_STYLE.reverse}>
              1
            </Button>
            <Button size={BUTTON_SIZE.small} buttonStyle={BUTTON_STYLE.reverse}>
              2
            </Button>
            <Button size={BUTTON_SIZE.small} buttonStyle={BUTTON_STYLE.reverse}>
              3
            </Button>
            <Button size={BUTTON_SIZE.small} buttonStyle={BUTTON_STYLE.reverse}>
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
    </Table>
  );
};
