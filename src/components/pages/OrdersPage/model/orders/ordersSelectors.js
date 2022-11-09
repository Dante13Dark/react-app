export const getOrdersData = (state) => state.orders.allOrders;

export const getSortType = (state) => state.filters.sort.sortType;
export const getSortDirection = (state) => state.filters.sort.isSortAscending;

export const getPageNumber = (state) => state.orders.page;
export const getPageLimit = (state) => state.orders.pageLimit;
export const getSearchValue = (state) => state.filters.searchValue;
export const getDateFromValue = (state) =>
  state.filters.selectedFilters.dateFromValue;
export const getDateToValue = (state) =>
  state.filters.selectedFilters.dateToValue;
export const getStatusValues = (state) =>
  state.filters.selectedFilters.statusValues;
export const getAmountFromValue = (state) =>
  state.filters.selectedFilters.amountFromValue;
export const getAmountToValue = (state) =>
  state.filters.selectedFilters.amountToValue;

const getActiveFilterValue = (state, value) =>
  state.filters.activeFilters[value];

const FILTER_VALUE = {
  dateFrom: "dateFromValue",
  dateTo: "dateToValue",
  statusValues: "statusValues",
  amountFrom: "amountFromValue",
  amountTo: "amountToValue",
};

export const getCurrentPageOrders = (state) => {
  const orders = getSortedOrders(state);
  const page = getPageNumber(state);
  const pageLimit = getPageLimit(state);
  const beginIndex = pageLimit * (page - 1);
  const endIndex = beginIndex + pageLimit;
  return orders.slice(beginIndex, endIndex);
};

const getSortedOrders = (state) => {
  const sortType = getSortType(state);
  const isSortAscending = getSortDirection(state);
  let orders = getFilteredOrders(state);
  const direction = isSortAscending ? -1 : 1;
  switch (sortType) {
    case "date":
      return orders.sort((a, b) => {
        const aDate = getDate(a.date);
        const bDate = getDate(b.date);
        return (aDate - bDate) * direction;
      });
    case "status":
      return orders.sort(
        (a, b) =>
          (STATUS_PRIORITY[a.status] - STATUS_PRIORITY[b.status]) * direction
      );
    case "count":
      return orders.sort((a, b) => (a.amount - b.amount) * direction);
    case "amount":
      return orders.sort(
        (a, b) => (parseSum(a.sum) - parseSum(b.sum)) * direction
      );
    default:
      return orders;
  }
};

const STATUS_PRIORITY = {
  completed: 6,
  calculation: 5,
  confirmed: 4,
  new: 3,
  postponed: 2,
  declined: 1,
};

export const getFilteredOrders = (state) => {
  let orders = getOrdersData(state);
  const searchValue = getSearchValue(state);

  // Поиск по значению работает всегда
  orders = orders.filter((order) => {
    return searchValue ? filterBySearchValue(order, searchValue) : true;
  });

  const dateFrom = getActiveFilterValue(state, FILTER_VALUE.dateFrom);
  const dateTo = getActiveFilterValue(state, FILTER_VALUE.dateTo);
  const statusValues = getActiveFilterValue(state, FILTER_VALUE.statusValues);
  const amountFrom = getActiveFilterValue(state, FILTER_VALUE.amountFrom);
  const amountTo = getActiveFilterValue(state, FILTER_VALUE.amountTo);

  // Остальные фильтры по кнопке
  return orders.filter((order) => {
    const isDateFromFilter = dateFrom
      ? filterByDateFrom(order, dateFrom)
      : true;
    const isDateToFilter = dateTo ? filterByDateTo(order, dateTo) : true;
    const isStatusFilter = statusValues.length
      ? filterByStatus(order, statusValues)
      : true;
    const isAmountFromFilter = amountFrom
      ? filterByAmountFrom(order, amountFrom)
      : true;
    const isAmountToFilter = amountTo
      ? filterByAmountTo(order, amountTo)
      : true;

    return (
      isDateFromFilter &&
      isDateToFilter &&
      isStatusFilter &&
      isAmountFromFilter &&
      isAmountToFilter
    );
  });
};

function filterBySearchValue(order, searchValue) {
  return (
    order.customer.includes(searchValue) ||
    String(order.id).includes(searchValue)
  );
}

function filterByDateFrom(order, dateFrom) {
  const [dd, mm, yy] = dateFrom.split(".");
  const date = getDate(order.date);
  const dateStart = new Date(yy, mm, dd);
  console.log(dateStart);
  console.log(date);
  return dateStart <= date;
}

function filterByDateTo(order, dateTo) {
  const [dd, mm, yy] = dateTo.split(".");
  const date = getDate(order.date);
  const dateEnd = new Date(yy, mm, dd);
  return date <= dateEnd;
}

const JSON_TO_APP_STATUS_MAP = {
  new: "new",
  calculation: "calculation",
  confirmed: "accepted",
  postponed: "paused",
  completed: "done",
  declined: "cancelled",
};

function filterByStatus(order, selectedStatuses) {
  return selectedStatuses.includes(JSON_TO_APP_STATUS_MAP[order.status]);
}

function filterByAmountFrom(order, amountFrom) {
  return parseSum(order.sum) >= amountFrom;
}

function filterByAmountTo(order, amountTo) {
  return parseSum(order.sum) <= amountTo;
}

// Helpers

function parseSum(sum) {
  return parseInt(String(sum).replace(/\s+/g, ""), 10);
}

function getDate(dateString) {
  const date = new Date();
  const [dd, mm, yy] = dateString.slice(0, 10).split(".");
  date.setFullYear(yy, mm, dd);
  const [h, m] = dateString.slice(11).split(":");
  date.setHours(h, m);
  return date;
}
