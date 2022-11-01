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
import { Icon, ICON_MAP } from "../../../../shared/Icon/Icon";
import { Checkbox } from "../../../../shared/Checkbox/Checkbox";
import cn from "classnames";
import { orders } from "./orders";

const STATUS_MAP = {
  new: {
    name: "Новый",
    icon: ICON_MAP.dot,
    statusStyle: styles.status_warning,
  },
  calculation: {
    name: "Расчет",
    icon: ICON_MAP.dot,
    statusStyle: styles.status_waiting,
  },
  confirmed: {
    name: "Подтвержден",
    icon: ICON_MAP.dot,
    statusStyle: styles.status_waiting,
  },
  postponed: {
    name: "Отложен",
    icon: ICON_MAP.dot,
    statusStyle: styles.status_warning,
  },
  completed: {
    name: "Выполнен",
    icon: ICON_MAP.checkmark,
    statusStyle: styles.status_success,
  },
  declined: {
    name: "Отменен",
    icon: ICON_MAP.abort,
    statusStyle: styles.status_failure,
  },
};

function getStatusText(status) {
  const selectedStatus = STATUS_MAP[status];
  return (
    <>
      <Icon
        name={selectedStatus.icon}
        className={cn(styles.status_cell__icon, selectedStatus.statusStyle)}
      />
      <span className={cn(selectedStatus.statusStyle)}>
        {selectedStatus.name}
      </span>
    </>
  );
}

export const OrdersTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell className={styles.checkbox_cell}>
            <Checkbox />
          </TableHeaderCell>
          <TableHeaderCell className={styles.order_cell}>#</TableHeaderCell>
          <TableHeaderCell className={styles.date_cell}>Дата</TableHeaderCell>
          <TableHeaderCell className={styles.status_cell}>
            Статус
          </TableHeaderCell>
          <TableHeaderCell className={styles.count_cell}>
            Позиций
          </TableHeaderCell>
          <TableHeaderCell className={styles.amount_cell}>
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
            <TableCell className={styles.status_cell}>
              {getStatusText(order.status)}
            </TableCell>
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
            {"Изменить статус"}
          </Button>
          <Button
            size={BUTTON_SIZE.small}
            buttonStyle={cn(BUTTON_STYLE.primary, styles.button_danger)}
            icon={ICON_MAP.bin}
          >
            {"Удалить"}
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
