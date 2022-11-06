import cn from "classnames";
import { Input } from "../../../../shared/Input/Input";
import styles from "./AmountFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAmountFromValue,
  getAmountToValue,
} from "../../model/ordersFilter/ordersFilterSelectors";
import {
  changeAmountFromValue,
  changeAmountToValue,
  resetAmountFromValue,
  resetAmountToValue,
} from "../../model/ordersFilter/ordersFilterSlice";

export const AmountFilter = ({ className }) => {
  const dispatch = useDispatch();

  const amountFromValue = useSelector(getAmountFromValue);
  const handleOnChangeAmountFromValue = (e) =>
    dispatch(changeAmountFromValue(e.target.value));
  const handleOnResetAmountFromValue = () => dispatch(resetAmountFromValue());

  const amountToValue = useSelector(getAmountToValue);
  const handleOnChangeAmountToValue = (e) =>
    dispatch(changeAmountToValue(e.target.value));
  const handleOnResetAmountToValue = () => dispatch(resetAmountToValue());

  const amountFilterClassNames = cn(styles._, className);
  return (
    <div className={amountFilterClassNames}>
      <Input
        label="Сумма заказа"
        placeholder="&#8381;"
        prefix="от"
        id="AmountFilterFrom"
        onChange={handleOnChangeAmountFromValue}
        onReset={handleOnResetAmountFromValue}
        value={amountFromValue}
      />
      <Input
        placeholder="&#8381;"
        prefix="до"
        id="AmountFilterTo"
        onChange={handleOnChangeAmountToValue}
        onReset={handleOnResetAmountToValue}
        value={amountToValue}
      />
    </div>
  );
};
