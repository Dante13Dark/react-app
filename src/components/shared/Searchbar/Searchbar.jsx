import styles from "./Searchbar.module.css";
import { Icon, ICON_MAP } from "../Icon/Icon";
import cn from "classnames";
import { Button, BUTTON_SIZE, BUTTON_STYLE } from "../Button/Button";

const noop = () => {};
export const Searchbar = ({
  className,
  placeholder,
  value,
  onChange = noop,
}) => {
  const searchbarClassNames = cn(styles._, className);
  return (
    <div className={searchbarClassNames}>
      <Icon name={ICON_MAP.search} className={styles.icon} />
      <input
        className={styles.input}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {value && (
        <Button
          className={styles.button}
          size={BUTTON_SIZE.small}
          style={BUTTON_STYLE.reverse}
          icon={ICON_MAP.xMedium}
          iconClassName={styles.icon}
        />
      )}
    </div>
  );
};

export const Searchbars = () => (
  <>
    <div className={cn(styles.searchbars, "dashed-wrapper")}>
      <Searchbar placeholder={"Номер заказа или ФИО"} />
      <Searchbar placeholder={"Номер заказа или ФИО"} value={"50744"} />
    </div>
  </>
);
