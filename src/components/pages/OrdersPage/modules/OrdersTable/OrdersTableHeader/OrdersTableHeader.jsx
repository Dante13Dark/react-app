import { TableHeader } from "../../../../../shared/TableElements/TableHeader/TableHeader";
import { TableRow } from "../../../../../shared/TableElements/TableRow/TableRow";
import { TableHeaderCell } from "../../../../../shared/TableElements/TableHeaderCell/TableHeaderCell";
import styles from "../OrdersTable.module.css";
import { Checkbox } from "../../../../../shared/Checkbox/Checkbox";
import cn from "classnames";
import {
  addSelectedIDs,
  clearSelectedIDs,
} from "../../../model/ordersForm/ordersFormSlice";
import {
  setSortDirection,
  setSortField,
} from "../../../model/ordersFilter/ordersFilterSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPageOrders,
  getFilterValues,
  getPageNumber,
  getSearchValue,
  getSelectedIDs,
  getSortDirection,
  getSortField,
} from "../../../model/orders/ordersSelectors";
import { useEffect } from "react";

export const OrdersTableHeader = () => {
  const dispatch = useDispatch();
  const orders = useSelector(getCurrentPageOrders);
  const selectedIDs = useSelector(getSelectedIDs);

  const currentSortField = useSelector(getSortField);
  const currentSortDirection = useSelector(getSortDirection);

  const currentPageIDs = orders.map((order) => order.id);
  const isAllChecked = currentPageIDs.every((id) => selectedIDs.includes(id));
  const filters = useSelector(getFilterValues);
  const searchValue = useSelector(getSearchValue);
  const currentPage = useSelector(getPageNumber);

  useEffect(() => {
    dispatch(clearSelectedIDs());
  }, [
    filters,
    searchValue,
    currentPage,
    currentSortField,
    currentSortDirection,
  ]);

  const handleSelectAll = () => {
    if (isAllChecked) {
      dispatch(clearSelectedIDs());
    } else {
      currentPageIDs.forEach((id) => {
        if (!selectedIDs.includes(id)) {
          dispatch(addSelectedIDs(id));
        }
      });
    }
  };

  const handleHeaderCellClick = (sortField) => {
    if (currentSortField === sortField) {
      dispatch(setSortDirection(!currentSortDirection));
    } else {
      dispatch(setSortField(sortField));
      dispatch(setSortDirection(true));
    }
  };

  return (
    <TableHeader>
      <TableRow>
        <TableHeaderCell className={styles.checkbox_cell}>
          <Checkbox checked={isAllChecked} onClick={handleSelectAll} />
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
  );
};
