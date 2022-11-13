import { createSelector } from "@reduxjs/toolkit";
import { PAGE_LIMIT } from "../ordersFilter/ordersFilterSlice";

export const getOrdersData = (state) => state.orders.allOrders;

export const getSearchValue = (state) => state.filters.searchValue;
export const getFilterValues = (state) => state.filters.filters;

export const getSortField = (state) => state.filters.sort.sortField;
export const getSortDirection = (state) => state.filters.sort.isSortAscending;

export const getPageNumber = (state) => state.filters.page;

const getFilteredOrders = (state) => {
  const ordersData = getOrdersData(state);
  const searchValue = getSearchValue(state);
  const { dateFrom, dateTo, statusValues, amountFrom, amountTo } =
    getFilterValues(state);

  const searchFilter = isStringOrSubstring(searchValue);
  const dateFilter = isDateInRange(
    parseInputDate(dateFrom),
    parseInputDate(dateTo)
  );
  const amountFilter = isAmountInRange(amountFrom, amountTo);
  const statusValuesFilter = isContainStatus(statusValues);

  return ordersData.filter(
    ({ date, amount, status, customer, orderNumber }) => {
      return areAllTrusty([
        dateFilter(parseServerDate(date)),
        amountFilter(amount),
        searchFilter(customer, orderNumber),
        statusValuesFilter(status),
      ]);
    }
  );
};

export const getSortedOrders = (state) => {
  const filteredOrders = getFilteredOrders(state);
  const sortField = getSortField(state);
  const sortDirection = getSortDirection(state);
  return filteredOrders.sort(SORT_FIELD_MAP[sortField](sortDirection ? -1 : 1));
};

export const getCurrentPageOrders = createSelector(
  [getSortedOrders, getPageNumber],
  (sortedOrders, pageNumber) => {
    const pageLimit = PAGE_LIMIT;
    const beginIndex = pageLimit * (pageNumber - 1);
    const endIndex = beginIndex + pageLimit;
    return sortedOrders.slice(beginIndex, endIndex);
  }
);

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
    return Number(amount) <= Number(amountTo);
  }

  if (!amountTo) {
    return Number(amount) >= Number(amountFrom);
  }

  return (
    Number(amount) >= Number(amountFrom) && Number(amount) <= Number(amountTo)
  );
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

const areAllTrusty = (arr) => arr.every(Boolean);

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
