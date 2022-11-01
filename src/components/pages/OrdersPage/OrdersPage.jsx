import styles from "./OrdersPage.module.css";
import { Filter } from "./modules/Filter/Filter";
import { useState } from "react";
import { OrdersPageHeader } from "./modules/OrdersPageHeader/OrdersPageHeader";
import { OrdersTable } from "./modules/OrdersTable/OrdersTable";

export const OrdersPage = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const handleToggleAdditionalFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  return (
    <div className={styles.body}>
      <OrdersPageHeader title={"Список заказов"} />
      <Filter
        isActive={isFilterVisible}
        onShowFilterButtonClick={handleToggleAdditionalFilter}
      />
      <OrdersTable />
    </div>
  );
};
