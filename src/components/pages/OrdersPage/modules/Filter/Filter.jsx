import cn from "classnames";
import {
  Button,
  BUTTON_SIZE,
  BUTTON_STYLE,
} from "../../../../shared/Button/Button";
import { ICON_MAP } from "../../../../shared/Icon/Icon";
import { Searchbar } from "../../../../shared/Searchbar/Searchbar";
import styles from "./Filter.module.css";
import { DateFilter } from "../DateFilter/DateFilter";
import { StatusFilter } from "../StatusFilter/StatusFilter";
import { AmountFilter } from "../AmountFilter/AmountFilter";

const noop = () => {};

export const Filter = ({
  isActive = false,
  onShowFilterButtonClick = noop,
  onResetButtonClick = noop,
  searchValue,
  onSearchbarChange = noop,
  className,
}) => {
  const blockClass = cn(styles._, className);

  return (
    <div className={blockClass}>
      <div className={styles.mainBlock}>
        <div className={styles.leftBlock}>
          <div className={styles.searchbarWrapper}>
            <Searchbar
              value={searchValue}
              onChange={onSearchbarChange}
              placeholder="Номер заказа или ФИО"
            />
          </div>

          <Button
            icon={ICON_MAP.filter}
            size={BUTTON_SIZE.medium}
            style={isActive ? BUTTON_STYLE.primary : BUTTON_STYLE.reverse}
            title="Фильтры"
            onClick={() => onShowFilterButtonClick()}
          />

          {isActive && (
            <Button
              size={BUTTON_SIZE.medium}
              style={BUTTON_STYLE.reverse}
              title="Сбросить фильтры"
              id="filterResetButton"
              onClick={onResetButtonClick}
            />
          )}
        </div>
        <Button
          icon={ICON_MAP.refresh}
          size={BUTTON_SIZE.medium}
          style={BUTTON_STYLE.reverse}
          title="Загрузка"
        />
      </div>

      {isActive && (
        <div className={styles.extendedBlock}>
          <DateFilter className={styles.dateFilter} />
          <StatusFilter className={styles.stateFilter} />
          <AmountFilter className={styles.amountFilter} />
          <Button
            size={BUTTON_SIZE.medium}
            style={BUTTON_STYLE.reverse}
            title="Применить"
            className={styles.applyFilterButton}
          />
        </div>
      )}
    </div>
  );
};
