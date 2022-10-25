import styles from "./OrdersPage.module.css";
import { Filter } from "./modules/Filter/Filter";
import { useState } from "react";
import { OrdersPageHeader } from "./modules/OrdersPageHeader/OrdersPageHeader";

export const OrdersPage = () => {
  const [additionalFilterVisibility, setAdditionalFilterVisibility] =
    useState(false);
  const handleToggleAdditionalFilter = () => {
    console.log("click");
    setAdditionalFilterVisibility(!additionalFilterVisibility);
  };
  return (
    <div className={styles.body}>
      <OrdersPageHeader title={"Список заказов"} />
      <Filter
        isActive={additionalFilterVisibility}
        onShowFilterButtonClick={handleToggleAdditionalFilter}
      />
    </div>
  );
};
