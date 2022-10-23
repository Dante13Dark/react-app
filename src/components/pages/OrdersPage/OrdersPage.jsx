import styles from "./OrdersPage.module.css";
import pageHeaderStyles from "../../shared/PageHeader/PageHeader.module.css";
import { PageHeader } from "../../shared/PageHeader/PageHeader";
import { Button, BUTTON_SIZE, BUTTON_STYLE } from "../../shared/Button/Button";
import { ICON_MAP } from "../../shared/Icon/Icon";
import { Filter } from "./modules/Filter/Filter";
import { useState } from "react";

export const OrdersPage = () => {
  const [additionalFilterVisibility, setAdditionalFilterVisibility] =
    useState(false);
  const handleToggleAdditionalFilter = () => {
    console.log("click");
    setAdditionalFilterVisibility(!additionalFilterVisibility);
  };
  return (
    <div className={styles.body}>
      <PageHeader title="Список заказов">
        <Button
          className={pageHeaderStyles.button}
          size={BUTTON_SIZE.medium}
          style={BUTTON_STYLE.reverse}
          icon={ICON_MAP.sun}
          iconClassName={pageHeaderStyles.icon}
          title={"Светлая тема"}
        />
      </PageHeader>
      <Filter
        isActive={additionalFilterVisibility}
        onShowFilterButtonClick={handleToggleAdditionalFilter}
      />
    </div>
  );
};
