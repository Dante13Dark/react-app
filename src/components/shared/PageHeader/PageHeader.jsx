import styles from "./PageHeader.module.css";
import { ICON_MAP } from "../Icon/Icon";
import cn from "classnames";
import { Button, BUTTON_SIZE, BUTTON_STYLE } from "../Button/Button";

export const PageHeader = ({ className, title, children }) => {
  return (
    <div
      className={cn(styles._, {
        [className]: !!className,
      })}
    >
      <span className={styles.text}>{title}</span>
      {children}
    </div>
  );
};

export const PageHeaders = () => {
  const button = (
    <Button
      className={styles.button}
      size={BUTTON_SIZE.medium}
      style={BUTTON_STYLE.reverse}
      icon={ICON_MAP.sun}
      iconClassName={styles.icon}
      title={"Светлая тема"}
    />
  );

  return (
    <>
      <div className={cn(styles.page_headers, "dashed-wrapper")}>
        <PageHeader title={"Список заказов"}>{button}</PageHeader>

        <PageHeader title={"Список заказов"}>{button}</PageHeader>
      </div>
    </>
  );
};
