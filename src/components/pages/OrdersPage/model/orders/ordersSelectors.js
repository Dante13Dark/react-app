export const getOrdersData = (state) => state.orders.allOrders;
export const getPageNumber = (state) => state.orders.page;
export const getPageLimit = (state) => state.orders.pageLimit;
export const getSearchValue = (state) => state.filters.searchValue;
export const getDateFromValue = (state) => state.filters.dateFromValue;
export const getDateToValue = (state) => state.filters.dateToValue;
export const getStatusValues = (state) => state.filters.statusValues;
export const getAmountFromValue = (state) => state.filters.amountFromValue;
export const getAmountToValue = (state) => state.filters.amountToValue;

export const getCurrentPageOrders = (state) => {
  const orders = getFilteredOrders(state);
  const page = getPageNumber(state);
  const pageLimit = getPageLimit(state);
  const beginIndex = pageLimit * (page - 1);
  const endIndex = beginIndex + pageLimit;
  const result = orders.slice(beginIndex, endIndex);
  return result;
};

export const getFilteredOrders = (state) => {
  let orders = getOrdersData(state);
  const searchValue = getSearchValue(state);
  const dateFrom = getDateFromValue(state);
  const dateTo = getDateToValue(state);
  const statusValues = getStatusValues(state);
  const amountFrom = getAmountFromValue(state);
  const amountTo = getAmountToValue(state);

  return orders.filter((order) => {
    const isSearchFilter = searchValue
      ? filterBySearchValue(order, searchValue)
      : true;
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
      isSearchFilter &&
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

function filterByStatus(order, selectedStatuses) {
  return selectedStatuses.includes(order.status);
}

function filterByAmountFrom(order, amountFrom) {
  return parseInt(String(order.sum).replace(/\s+/g, ""), 10) >= amountFrom;
}

function filterByAmountTo(order, amountTo) {
  return parseInt(String(order.sum).replace(/\s+/g, ""), 10) <= amountTo;
}
