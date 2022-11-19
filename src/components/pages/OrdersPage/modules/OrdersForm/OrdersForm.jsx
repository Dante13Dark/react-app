import styles from "./OrdersForm.module.css";
import { useSelector } from "react-redux";
import { getOrderById } from "../../model/orders/ordersSelectors";
import { OrdersFormHeader } from "./OrdersFormHeader/OrdersFormHeader";
import { OrdersFormFooter } from "./OrdersFormFooter/OrdersFormFooter";
import { OrdersFormBody } from "./OrdersFormBody/OrdersFormBody";

export const OrdersForm = ({ modalSetter, orderId }) => {
  const order = useSelector(getOrderById(orderId));
  return (
    <div className={styles._}>
      <div className={styles.form}>
        <OrdersFormHeader
          orderNumber={order.orderNumber}
          setIsModalActive={modalSetter}
        />
        <OrdersFormBody order={order} />
        <OrdersFormFooter setIsModalActive={modalSetter} />
      </div>
    </div>
  );
};
