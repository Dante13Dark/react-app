import { createSelector } from "@reduxjs/toolkit";
import { PAGE_LIMIT } from "../ordersFilter/ordersFilterSlice";

export const getOrdersIsLoading = (state) => state.orders.isLoading;
export const getOrdersData = (state) => state.orders.ordersData;

export const getFilters = (state) => state.filters;
export const getSearchValue = (state) => state.filters.searchValue;
export const getFilterValues = (state) => state.filters.filters;

export const getSortField = (state) => state.filters.sort.sortField;
export const getSortDirection = (state) => state.filters.sort.isSortAscending;

export const getPageNumber = (state) => state.filters.page;
export const getSelectedIDs = (state) => state.ordersForm.selectedIDs;

const getFilteredOrders = (orders, filters) => {
  const { searchValue } = filters;
  const { dateFrom, dateTo, statusValues, amountFrom, amountTo } =
    filters.filters;

  const searchFilter = isStringOrSubstring(searchValue);
  const dateFilter = isDateInRange(
    parseInputDate(dateFrom),
    parseInputDate(dateTo)
  );
  const amountFilter = isAmountInRange(Number(amountFrom), Number(amountTo));
  const statusValuesFilter = isContainStatus(statusValues);

  return orders.filter(({ date, amount, status, customer, orderNumber }) => {
    return areAllTruthy([
      dateFilter(parseServerDate(date)),
      amountFilter(amount),
      searchFilter(customer, orderNumber),
      statusValuesFilter(status),
    ]);
  });
};

export const getSortedOrders = createSelector(
  [getOrdersData, getFilters],
  (orders, filters) => {
    const filteredOrders = getFilteredOrders(orders, filters);
    const { sortField, isSortAscending } = filters.sort;
    const comparatorFn = SORT_FIELD_MAP[sortField];
    return filteredOrders.sort(comparatorFn(isSortAscending ? -1 : 1));
  }
);

export const getCurrentPageOrders = createSelector(
  [getSortedOrders, getPageNumber],
  (sortedOrders, pageNumber) => {
    const pageLimit = PAGE_LIMIT;
    const beginIndex = pageLimit * (pageNumber - 1);
    const endIndex = beginIndex + pageLimit;
    return sortedOrders.slice(beginIndex, endIndex);
  }
);

export const getOrderById = (id) =>
  createSelector([getOrdersData], (orders) => {
    return orders.find((order) => order.id === id);
  });

// Фильтрация

const isDateInRange = (dateFrom, dateTo) => (date) => {
  if (!dateFrom && !dateTo) {
    return true;
  }

  if (!dateFrom) {
    return date <= dateTo;
  }

  if (!dateTo) {
    return date >= dateFrom;
  }

  return date >= dateFrom && date <= dateTo;
};

const parseInputDate = (inputDate) => {
  if (!inputDate) {
    return null;
  }
  const [dd, mm, yy] = inputDate.split(".");
  const date = new Date(yy, mm - 1, dd);
  return date ? date : null;
};

const parseServerDate = (serverDate) => {
  const date = new Date(serverDate);
  date.setHours(0, 0, 0, 0);
  return date;
};

const isAmountInRange = (amountFrom, amountTo) => (amount) => {
  if (!amountFrom && !amountTo) {
    return true;
  }

  if (!amountFrom) {
    return amount <= amountTo;
  }

  if (!amountTo) {
    return amount >= amountFrom;
  }

  return amount >= amountFrom && amount <= amountTo;
};

const isContainStatus = (statusValues) => (status) => {
  if (!statusValues.length) {
    return true;
  }
  return statusValues.includes(status);
};

const isStringOrSubstring = (searchValue) => (customer, orderNumber) => {
  return (
    customer.includes(searchValue) ||
    String(orderNumber).startsWith(searchValue, 0)
  );
};

const areAllTruthy = (arr) => arr.every(Boolean);

// Сортировка

const STATUS_PRIORITY = {
  done: 6,
  calculation: 5,
  accepted: 4,
  new: 3,
  paused: 2,
  cancelled: 1,
};

const sortByDate = (direction) => (a, b) => {
  const aDate = new Date(a.date);
  const bDate = new Date(b.date);
  return (aDate - bDate) * direction;
};

const sortByStatus = (direction) => (a, b) => {
  return (STATUS_PRIORITY[a.status] - STATUS_PRIORITY[b.status]) * direction;
};

const sortByCount = (direction) => (a, b) => {
  return (a.count - b.count) * direction;
};

const sortByAmount = (direction) => (a, b) => {
  return (a.amount - b.amount) * direction;
};

const SORT_FIELD_MAP = {
  date: sortByDate,
  amount: sortByAmount,
  status: sortByStatus,
  count: sortByCount,
};
