import { useContext, useState } from "react";

import { PageHeader } from "../../../../shared/PageHeader/PageHeader";
import {
  Button,
  BUTTON_SIZE,
  BUTTON_STYLE,
} from "../../../../shared/Button/Button";
import { ICON_MAP } from "../../../../shared/Icon/Icon";
import { Dropdown, DROPDOWN_STYLE } from "../../../../shared/Dropdown/Dropdown";

import styles from "./OrdersPageHeader.module.css";
import {
  COLOR_THEMES,
  isDarkTheme,
  ThemeContext,
} from "../../../../shared/ThemeContext/ThemeContext";

export const OrdersPageHeader = ({ title, className }) => {
  const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);
  const handleToggleVisibility = () => {
    console.log("TAP");
    setIsVisibleDropdown(!isVisibleDropdown);
  };

  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleThemeSelection = (currentTheme) => {
    toggleTheme(currentTheme);
    console.log(document.documentElement.dataset.theme);
  };

  const button = (
    <Button
      className={styles.button}
      size={BUTTON_SIZE.medium}
      style={BUTTON_STYLE.reverse}
      iconClassName={styles.icon}
      title={isDarkTheme(theme) ? "Темная тема" : "Светлая тема"}
      icon={isDarkTheme(theme) ? ICON_MAP.moon : ICON_MAP.sun}
      onClick={handleToggleVisibility}
    />
  );

  const overlay = (
    <>
      <span className={styles.title}>Выберите тему</span>
      <Button
        size={BUTTON_SIZE.small}
        style={BUTTON_STYLE.reverse}
        title={"Светлая"}
        icon={ICON_MAP.sun}
        onClick={() => handleThemeSelection(COLOR_THEMES.light)}
      />
      <Button
        size={BUTTON_SIZE.small}
        style={BUTTON_STYLE.primary}
        title={"Темная"}
        icon={ICON_MAP.moon}
        onClick={() => handleThemeSelection(COLOR_THEMES.dark)}
      />
    </>
  );

  return (
    <PageHeader title={title} className={className}>
      <Dropdown
        style={DROPDOWN_STYLE.dialog}
        trigger={button}
        overlay={overlay}
      />
    </PageHeader>
  );
};
