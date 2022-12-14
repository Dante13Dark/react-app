import {
  Button,
  BUTTON_SIZE,
  BUTTON_STYLE,
} from "../../../../../shared/Button/Button";
import { Icon, ICON_MAP } from "../../../../../shared/Icon/Icon";
import { Searchbar } from "../../../../../shared/Searchbar/Searchbar";
import styles from "./Filter.module.css";
import { DateFilter } from "../DateFilter/DateFilter";
import { StatusFilter } from "../StatusFilter/StatusFilter";
import { AmountFilter } from "../AmountFilter/AmountFilter";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrdersIsLoading,
  getSearchValue,
} from "../../../model/orders/ordersSelectors";
import {
  setSearchValue,
  resetFilters,
  setFilter,
} from "../../../model/ordersFilter/ordersFilterSlice";
import { clearSelectedIDs } from "../../../model/ordersForm/ordersFormSlice";

const initialState = {
  dateFrom: "",
  dateTo: "",
  statusValues: [],
  amountFrom: "",
  amountTo: "",
};

export const Filter = () => {
  const dispatch = useDispatch();

  const isOrdersLoading = useSelector(getOrdersIsLoading);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const handleToggleAdditionalFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const searchValue = useSelector(getSearchValue);
  const handleSearchbarChangeValue = (e) =>
    dispatch(setSearchValue(e.target.value));
  const handleSearchbarReset = () => dispatch(setSearchValue(""));

  const [filtersValues, setFiltersValues] = useState(initialState);
  const handleOnChange = (key) => (event) => {
    setFiltersValues({ ...filtersValues, [key]: event.target.value });
  };
  const handleOnReset = (key) => {
    setFiltersValues({ ...filtersValues, [key]: "" });
  };
  const getFilterValue = (key) => {
    return filtersValues[key];
  };

  const statusValues = getFilterValue("statusValues");
  const handleChangeStatusValues = (key) => {
    setFiltersValues({
      ...filtersValues,
      ["statusValues"]: statusValues.includes(key)
        ? statusValues.filter((item) => item !== key)
        : [...statusValues, key],
    });
  };

  const handleApplyFilters = () => {
    dispatch(setFilter(filtersValues));
  };

  const handleResetFilters = () => {
    setFiltersValues(initialState);
    dispatch(resetFilters());
    dispatch(clearSelectedIDs());
  };

  return (
    <div className={styles._}>
      <div className={styles.mainBlock}>
        <div className={styles.leftBlock}>
          <div className={styles.searchbarWrapper}>
            <Searchbar
              value={searchValue}
              onChange={handleSearchbarChangeValue}
              onReset={handleSearchbarReset}
              placeholder="?????????? ???????????? ?????? ??????"
            />
          </div>

          <Button
            icon={ICON_MAP.filter}
            size={BUTTON_SIZE.medium}
            buttonStyle={
              isFilterVisible ? BUTTON_STYLE.primary : BUTTON_STYLE.reverse
            }
            onClick={handleToggleAdditionalFilter}
          >
            ??????????????
          </Button>
          {isFilterVisible && (
            <Button
              size={BUTTON_SIZE.medium}
              buttonStyle={BUTTON_STYLE.reverse}
              id="filterResetButton"
              onClick={handleResetFilters}
            >
              ???????????????? ??????????????
            </Button>
          )}
        </div>
        {isOrdersLoading && (
          <div className={styles.loading}>
            <Icon name={ICON_MAP.refresh} className={styles.icon} />
            <span className={styles.text}>????????????????</span>
          </div>
        )}
      </div>

      {isFilterVisible && (
        <div className={styles.extendedBlock}>
          <DateFilter
            className={styles.dateFilter}
            onChange={handleOnChange}
            onReset={handleOnReset}
            getFilterValue={getFilterValue}
          />
          <StatusFilter
            className={styles.stateFilter}
            handleChangeStatusValues={handleChangeStatusValues}
            statusValues={statusValues}
          />
          <AmountFilter
            className={styles.amountFilter}
            onChange={handleOnChange}
            onReset={handleOnReset}
            getFilterValue={getFilterValue}
          />
          <Button
            size={BUTTON_SIZE.medium}
            buttonStyle={BUTTON_STYLE.reverse}
            className={styles.applyFilterButton}
            onClick={handleApplyFilters}
          >
            ??????????????????
          </Button>
        </div>
      )}
    </div>
  );
};
