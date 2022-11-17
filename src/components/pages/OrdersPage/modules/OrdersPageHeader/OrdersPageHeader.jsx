import { useContext } from "react";

import { PageHeader } from "../../../../shared/PageHeader/PageHeader";
import {
  Button,
  BUTTON_SIZE,
  BUTTON_STYLE,
} from "../../../../shared/Button/Button";
import { ICON_MAP } from "../../../../shared/Icon/Icon";
import { Dropdown } from "../../../../shared/Dropdown/Dropdown";

import styles from "./OrdersPageHeader.module.css";
import {
  COLOR_THEMES,
  isDarkTheme,
  ThemeContext,
} from "../../../../shared/ThemeContext/ThemeContext";
import cn from "classnames";

export const OrdersPageHeader = ({ className }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleThemeSelection = (currentTheme) => {
    toggleTheme(currentTheme);
  };

  const button = (
    <Button
      className={styles.button}
      size={BUTTON_SIZE.medium}
      buttonStyle={BUTTON_STYLE.reverse}
      iconClassName={styles.icon}
      icon={isDarkTheme(theme) ? ICON_MAP.moon : ICON_MAP.sun}
    >
      {isDarkTheme(theme) ? "Темная тема" : "Светлая тема"}
    </Button>
  );

  const overlay = (
    <div className={cn(styles.dialog)}>
      <span className={styles.title}>Выберите тему</span>
      <Button
        size={BUTTON_SIZE.small}
        buttonStyle={
          isDarkTheme(theme) ? BUTTON_STYLE.reverse : BUTTON_STYLE.primary
        }
        icon={ICON_MAP.sun}
        onClick={() => handleThemeSelection(COLOR_THEMES.light)}
        className={styles.dialog_Button}
      >
        Светлая
      </Button>
      <Button
        size={BUTTON_SIZE.small}
        buttonStyle={
          isDarkTheme(theme) ? BUTTON_STYLE.primary : BUTTON_STYLE.reverse
        }
        icon={ICON_MAP.moon}
        onClick={() => handleThemeSelection(COLOR_THEMES.dark)}
        className={styles.dialog_Button}
      >
        Темная
      </Button>
    </div>
  );

  return (
    <PageHeader title={"Список заказов"} className={className}>
      <Dropdown trigger={button} overlay={overlay} />
    </PageHeader>
  );
};
