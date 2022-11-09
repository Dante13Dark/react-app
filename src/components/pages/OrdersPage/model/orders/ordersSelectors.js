export const getOrdersData = (state) => state.orders.allOrders;
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

export const getCurrentPageOrders = (state) => {
  const orders = getFilteredOrders(state);
  const page = getPageNumber(state);
  const pageLimit = getPageLimit(state);
  const beginIndex = pageLimit * (page - 1);
  const endIndex = beginIndex + pageLimit;
  return orders.slice(beginIndex, endIndex);
};

const FILTER_VALUE = {
  dateFrom: "dateFromValue",
  dateTo: "dateToValue",
  statusValues: "statusValues",
  amountFrom: "amountFromValue",
  amountTo: "amountToValue",
};

export const getFilteredOrders = (state) => {
  let orders = getOrdersData(state);
  const searchValue = getSearchValue(state);

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
  return order.customer.includes(searchValue);
}

function filterByDateFrom(order, dateFrom) {
  const [d, m, y] = order.date.slice(0, 10).split(".");
  const [df, mf, yf] = dateFrom.split(".");
  const date = Date.parse(`${y}-${m}-${d}`);
  const dateStart = Date.parse(`${yf}-${mf}-${df}`);
  return dateStart <= date;
}

function filterByDateTo(order, dateTo) {
  const [d, m, y] = order.date.slice(0, 10).split(".");
  const [dt, mt, yt] = dateTo.split(".");
  const date = Date.parse(`${y}-${m}-${d}`);
  const dateEnd = Date.parse(`${yt}-${mt}-${dt}`);
  return date <= dateEnd;
}

const STATUS_MAP = {
  new: "new",
  calculation: "calculation",
  confirmed: "accepted",
  postponed: "paused",
  completed: "done",
  declined: "cancelled",
};

function filterByStatus(order, selectedStatuses) {
  return selectedStatuses.includes(STATUS_MAP[order.status]);
}

function filterByAmountFrom(order, amountFrom) {
  return parseInt(String(order.sum).replace(/\s+/g, ""), 10) >= amountFrom;
}

function filterByAmountTo(order, amountTo) {
  return parseInt(String(order.sum).replace(/\s+/g, ""), 10) <= amountTo;
}
