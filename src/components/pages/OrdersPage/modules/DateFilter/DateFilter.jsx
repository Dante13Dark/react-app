import cn from "classnames";
import { Input } from "../../../../shared/Input/Input";
import styles from "./DateFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeDateFromValue,
  resetDateFromValue,
  changeDateToValue,
  resetDateToValue,
} from "../../model/ordersFilter/ordersFilterSlice";
import {
  getDateFromValue,
  getDateToValue,
} from "../../model/orders/ordersSelectors";

export const DateFilter = ({ className }) => {
  const dispatch = useDispatch();

  const dateFromValue = useSelector(getDateFromValue);
  const handleOnChangeDateFromValue = (e) =>
    dispatch(changeDateFromValue(e.target.value));
  const handleOnResetDateFromValue = () => dispatch(resetDateFromValue());

  const dateToValue = useSelector(getDateToValue);
  const handleOnChangeDateToValue = (e) =>
    dispatch(changeDateToValue(e.target.value));
  const handleOnResetDateToValue = () => dispatch(resetDateToValue());

  const componentStyles = cn(styles._, className);
  return (
    <div className={componentStyles}>
      <Input
        label="Дата оформления"
        placeholder="dd.mm.yyyy"
        prefix="c"
        id="DateFilterFrom"
        onChange={handleOnChangeDateFromValue}
        onReset={handleOnResetDateFromValue}
        value={dateFromValue}
      />

      <Input
        placeholder="dd.mm.yyyy"
        prefix="по"
        id="DateFilterTo"
        onChange={handleOnChangeDateToValue}
        onReset={handleOnResetDateToValue}
        value={dateToValue}
      />
    </div>
  );
};
