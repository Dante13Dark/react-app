import styles from "./OrdersForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../model/orders/ordersSelectors";
import { OrdersFormHeader } from "./OrdersFormHeader/OrdersFormHeader";
import { OrdersFormFooter } from "./OrdersFormFooter/OrdersFormFooter";
import { OrdersFormBody } from "./OrdersFormBody/OrdersFormBody";
import { useState } from "react";
import { updateOrder } from "../../model/orders/ordersSlice";

export const CODE_MOCK = "000";

export const OrdersForm = ({ setIsModalActive, orderId }) => {
  const dispatch = useDispatch();
  const order = useSelector(getOrderById(orderId));

  const [customer, setCustomer] = useState(order.customer);
  const [selectedStatus, setSelectedStatus] = useState(order.status);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSaveButtonClick = () => {
    const isCorrectName = customer.length > 0;
    const isCorrectCode = code === CODE_MOCK;
    const isEmptyCode = code === "";
    const isValid = isCorrectName && isCorrectCode && !isEmptyCode;
    const isChanged =
      order.customer !== customer ||
      order.status !== selectedStatus ||
      code !== "";

    if (!isChanged) {
      setIsModalActive(false);
    } else if (isValid) {
      dispatch(
        updateOrder({
          id: orderId,
          fields: {
            customer: customer,
            status: selectedStatus,
          },
        })
      );
      setIsModalActive(false);
    } else {
      setIsValid(false);
      if (!isCorrectName && (!isCorrectCode || isEmptyCode)) {
        setError("Неправильное имя и код");
      } else if (!isCorrectName) {
        setError("Неправильное имя");
      } else if (!isCorrectCode || isEmptyCode) {
        setError("Неправильный код");
      }
    }
  };

  return (
    <div className={styles._}>
      <div className={styles.form}>
        <OrdersFormHeader
          orderNumber={order.orderNumber}
          setIsModalActive={setIsModalActive}
        />
        <OrdersFormBody
          order={order}
          customerState={[customer, setCustomer]}
          statusState={[selectedStatus, setSelectedStatus]}
          codeState={[code, setCode]}
          setError={setError}
          validState={[isValid, setIsValid]}
        />
        <OrdersFormFooter
          handleSaveButtonClick={handleSaveButtonClick}
          errorText={error}
        />
      </div>
    </div>
  );
};
