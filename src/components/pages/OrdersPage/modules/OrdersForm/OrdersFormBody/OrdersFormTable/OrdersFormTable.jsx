import styles from "./OrdersFormTable.module.css";
import { Table } from "../../../../../../shared/TableElements/Table/Table";
import { TableHeader } from "../../../../../../shared/TableElements/TableHeader/TableHeader";
import { TableHeaderCell } from "../../../../../../shared/TableElements/TableHeaderCell/TableHeaderCell";
import { TableRow } from "../../../../../../shared/TableElements/TableRow/TableRow";
import { TableBody } from "../../../../../../shared/TableElements/TableBody/TableBody";
import { TableCell } from "../../../../../../shared/TableElements/TableCell/TableCell";
import { TableFooter } from "../../../../../../shared/TableElements/TableFooter/TableFooter";

export const OrdersFormTable = () => {
  return (
    <Table className={styles.table}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell className={styles.articleCell}>
            Артикул
          </TableHeaderCell>
          <TableHeaderCell className={styles.nameCell}>
            Наименование
          </TableHeaderCell>
          <TableHeaderCell className={styles.priceCell}>Цена</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className={styles.bordered}>
          <TableCell className={styles.articleCell}>rt.12024</TableCell>
          <TableCell className={styles.nameCell}>
            Стил блейдс фо грасс
          </TableCell>
          <TableCell className={styles.priceCell}>15 339 ₽</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles.articleCell}>al.24600</TableCell>
          <TableCell className={styles.nameCell}>
            Газонокосилка Apple Magic Grass Remover
          </TableCell>
          <TableCell className={styles.priceCell}>82 664 ₽</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter className={styles.orderAmount}>
        <span className={styles.footer__text}>Итоговая сумма:</span>
        <span className={styles.footer__text}>98 003 ₽</span>
      </TableFooter>
    </Table>
  );
};
