import {
  Button,
  BUTTON_SIZE,
  BUTTON_STYLE,
} from "../../../../shared/Button/Button";
import { Icon, ICON_MAP } from "../../../../shared/Icon/Icon";
import { Searchbar } from "../../../../shared/Searchbar/Searchbar";
import styles from "./Filter.module.css";
import { DateFilter } from "../DateFilter/DateFilter";
import { StatusFilter } from "../StatusFilter/StatusFilter";
import { AmountFilter } from "../AmountFilter/AmountFilter";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchValue } from "../../model/orders/ordersSelectors";
import {
  changeSearchValue,
  resetSearchValue,
  resetFilters,
  applyFilters,
} from "../../model/ordersFilter/ordersFilterSlice";

export const Filter = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const handleToggleAdditionalFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const dispatch = useDispatch();

  const searchValue = useSelector(getSearchValue);
  const handleSearchbarChangeValue = (e) =>
    dispatch(changeSearchValue(e.target.value));
  const handleSearchbarReset = () => dispatch(resetSearchValue());

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const handleApplyFilters = () => dispatch(applyFilters());

  return (
    <div className={styles._}>
      <div className={styles.mainBlock}>
        <div className={styles.leftBlock}>
          <div className={styles.searchbarWrapper}>
            <Searchbar
              value={searchValue}
              onChange={handleSearchbarChangeValue}
              onReset={handleSearchbarReset}
              placeholder="Номер заказа или ФИО"
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
            Фильтры
          </Button>
          {isFilterVisible && (
            <Button
              size={BUTTON_SIZE.medium}
              buttonStyle={BUTTON_STYLE.reverse}
              id="filterResetButton"
              onClick={handleResetFilters}
            >
              Сбросить фильтры
            </Button>
          )}
        </div>
        <div className={styles.loading}>
          <Icon name={ICON_MAP.refresh} className={styles.icon} />
          <span className={styles.text}>Загрузка</span>
        </div>
      </div>

      {isFilterVisible && (
        <div className={styles.extendedBlock}>
          <DateFilter className={styles.dateFilter} />
          <StatusFilter className={styles.stateFilter} />
          <AmountFilter className={styles.amountFilter} />
          <Button
            size={BUTTON_SIZE.medium}
            buttonStyle={BUTTON_STYLE.reverse}
            className={styles.applyFilterButton}
            onClick={handleApplyFilters}
          >
            Применить
          </Button>
        </div>
      )}
    </div>
  );
};
