import styles from "./Button.module.css";
import cn from "classnames";
import { Icon } from "../Icon/Icon";

export const BUTTON_SIZE = {
  medium: "medium",
  small: "small",
};

export const BUTTON_STYLE = {
  primary: "primary",
  secondary: "secondary",
  reverse: "reverse",
};

export const Button = ({
  className,
  size = BUTTON_SIZE.medium,
  buttonStyle = BUTTON_STYLE.primary,
  icon,
  iconClassName,
  children,
  disabled,
  onClick,
  ...props
}) => {
  const buttonClasses = cn(styles._, className, {
    [styles.medium]: size === BUTTON_SIZE.medium,
    [styles.small]: size === BUTTON_SIZE.small,
    [styles.primary]: buttonStyle === BUTTON_STYLE.primary,
    [styles.secondary]: buttonStyle === BUTTON_STYLE.secondary,
    [styles.reverse]: buttonStyle === BUTTON_STYLE.reverse,
  });

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && <Icon name={icon} className={cn(styles.icon, iconClassName)} />}
      {children && <div className={styles.text}>{children}</div>}
    </button>
  );
};
