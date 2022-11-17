import styles from "./OrdersPage.module.css";
import { Filter } from "./modules/Filter/Filter";
import { OrdersPageHeader } from "./modules/OrdersPageHeader/OrdersPageHeader";
import { OrdersTable } from "./modules/OrdersTable/OrdersTable";

export const OrdersPage = () => {
  return (
    <div className={styles._}>
      <OrdersPageHeader />
      <Filter />
      <OrdersTable />
    </div>
  );
};
